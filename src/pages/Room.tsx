import { useParams } from "react-router-dom";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import "../styles/room.scss";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

type RoomParams = {
  id: string;
}

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

export function Room() {
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState("");
  const [isValidQuestion, setIsValidQuestion] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const { user } = useAuth();
  // const user = undefined;
  const roomId = params.id;

  useEffect(() => {
    if (newQuestion.trim() !== "") {
      setIsValidQuestion(true);
    } else {
      setIsValidQuestion(false);
    }
  }, [newQuestion]);

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


  async function handleNewQuestion(event: FormEvent) {
    event.preventDefault();
    if (!user) {
      throw new Error("You must be logged in.");
    }

    const question = {
      content: newQuestion.trim(),
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion("");
  }

  return <div id="page-room">
    <header>
      <div className="content">
        <img src={logoImg} alt="Letmeask logo" />
        <RoomCode code={roomId} />
      </div>
    </header>
    <main>
      <div className="room-title">
        <h1>Sala {roomName}</h1>
        {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
      </div>
      <form onSubmit={handleNewQuestion}>
        <textarea
          placeholder="O que você quer perguntar?"
          onChange={(event) => setNewQuestion(event.target.value)}
          value={newQuestion}
        />
        <div className="form-footer">
          {user ?
            <div className="user-info">
              <img src={user.avatar} alt={user.name} />
              <span>{user.name}</span>
            </div> :
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>}
          <Button disabled={!isValidQuestion || !user} type="submit">Enviar pergunta</Button>
        </div>
      </form>
      {JSON.stringify(questions)}
    </main>
  </div>;
}
