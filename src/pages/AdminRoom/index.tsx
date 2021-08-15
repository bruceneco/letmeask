import { useHistory, useParams } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import deleteImg from "../../assets/images/delete.svg";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import "./styles.scss";
import { database } from "../../services/firebase";
import { Question } from "../../components/Question";
import { useRoom } from "../../hooks/useRoom";
import { ROUTES } from "../../App";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const {user} = useAuth();
  const roomId = params.id;
  const history = useHistory();
  const { questions, roomName } = useRoom(roomId);

  useEffect(() => {
    async function checkIfUserIsAuthor() {
      const roomRef = await database.ref(`rooms/${roomId}`).get()
      const authorId = roomRef.val().authorId;
      if (!user || user.id !== authorId){
        history.push(ROUTES.Room(roomId))
      }
    }
    checkIfUserIsAuthor();
  }, [history, user, roomId]);
  async function handleCloseRoom() {
    if (window.confirm("Tem certeza que deseja encerrar essa sala?")) {
      await database.ref(`rooms/${roomId}`).update({
        closedAt: new Date()
      });
      history.push(ROUTES.Home());
    }
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Deseja realmente excluir essa pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return <div id="admin-room">
    <header>
      <div className="content">
        <img src={logoImg} alt="Letmeask logo" />
        <div>
          <RoomCode code={roomId} />
          <Button isOutlined onClick={handleCloseRoom}>Encerrar Sala</Button>
        </div>
      </div>
    </header>
    <main>
      <div className="room-title">
        <h1>Sala {roomName}</h1>
        {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
      </div>
      <div className="question-list">
        {questions.map(question =>
          <Question key={question.id} content={question.content} author={question.author}>
            <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
              <img src={deleteImg} alt="Deletar pergunta" />
            </button>
          </Question>
        )}
      </div>
    </main>
  </div>;
}
