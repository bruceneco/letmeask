import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleLogoIcon from '../../assets/images/google-icon.svg'
import { Button } from '../../components/Button'
import { ROUTES } from '../../App'
import { useAuth } from '../../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase'
import { useHistory } from 'react-router-dom'
import AnimateEntry from '../../components/animation/AnimateEntry'
import * as S from './styles'

export function Home() {
  const { user, signInWithGoogle } = useAuth()
  const history = useHistory()
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push(ROUTES.NewRoom())
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Sala inexistente.')
      return
    } else if (roomRef.val().closedAt) {
      alert('A sala já foi fechada.')
      return
    }
    history.push(ROUTES.Room(roomCode))
  }

  return (
    <S.PageAuthWrapper>
      <S.Aside>
        <AnimateEntry
          direction={'bottomToTop'}
          opacity
          delay={400}
          duration={1200}
        >
          <img
            src={illustrationImg}
            alt="Abstração de um chat de perguntas e respostas."
          />
          <div>
            <strong>Crie salas de Q&A ao vivo</strong>
            <p>Tire as dúvidas da sua audiência em tempo real.</p>
          </div>
        </AnimateEntry>
      </S.Aside>
      <S.Main>
        <S.Form onSubmit={handleJoinRoom}>
          <S.MainContent
            key={'main-content'}
            duration={400}
            delay={150}
            alternate
          >
            <img src={logoImg} alt="Logo da Letmeask" />
            <S.CreateRoom onClick={handleCreateRoom}>
              <img src={googleLogoIcon} alt="Logo do Google" />
              Crie sua sala com o Google
            </S.CreateRoom>
            <S.Separator>ou entre em uma sala</S.Separator>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </S.MainContent>
        </S.Form>
      </S.Main>
    </S.PageAuthWrapper>
  )
}
