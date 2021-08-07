import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleLogoIcon from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";
import { ROUTES } from "../App";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

type HomeProps = {
  history: { push: Function }
}

export function Home({ history }: HomeProps) {
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push(ROUTES.NewRoom());
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists.")
      return;
    }
    history.push(ROUTES.Room(roomCode))
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Abstração de um chat de perguntas e respostas." />
        <strong>Crie salas de Q&A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo da Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleLogoIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
