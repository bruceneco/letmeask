import { Link } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import { ROUTES } from "../App";

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Abstração de um chat de perguntas e respostas." />
        <strong>Crie salas de Q&A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
          <p>Quer entrar em uma sala já existente? <Link to={ROUTES.Home}>Clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
}
