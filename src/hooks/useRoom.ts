import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
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
}


export function useRoom(roomId: string) {
  const [roomName, setRoomName] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", room => {
      const roomData = room.val();
      const firebaseQuestions: FirebaseQuestions = roomData.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered
        };
      });
      setQuestions(parsedQuestions);
      setRoomName(roomData.title);
    });
  }, [roomId]);
  return {
    questions, roomName
  };
}