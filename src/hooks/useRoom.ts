import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>
}>

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likesCount: number;
  likeId: string | undefined;
}


export function useRoom(roomId: string) {
  const { user } = useAuth();
  const [roomName, setRoomName] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", room => {
      const roomData = room.val();
      const firebaseQuestions: FirebaseQuestions = roomData.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions ?? {}).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
          likeId: Object.entries(value.likes ?? {}).find(([, v]) => v.authorId === user?.id)?.[0],
          likesCount: Object.values(value.likes ?? {}).length
        };
      });
      setQuestions(parsedQuestions);
      setRoomName(roomData.title);
    });

    return () => {
      roomRef.off("value");
    };
  }, [roomId, user?.id]);
  return {
    questions, roomName
  };
}