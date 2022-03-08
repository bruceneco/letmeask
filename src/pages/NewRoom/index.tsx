import { Link, useHistory } from 'react-router-dom'
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import { Button } from '../../components/Button'
import { ROUTES } from '../../App'
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase'
import { useAuth } from '../../hooks/useAuth'
import * as S from './styles'
import AnimateEntry from '../../components/animation/AnimateEntry'

export function NewRoom() {
  const [roomName, setRoomName] = useState('')
  const history = useHistory()
  const { user } = useAuth()

  async function handleCreateNewRoom(event: FormEvent) {
    event.preventDefault()
    if (roomName.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user?.id
    })
    history.push(ROUTES.AdminRoom(firebaseRoom.key))
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
        <S.Form onSubmit={handleCreateNewRoom}>
          <S.MainContent
            duration={400}
            delay={150}
            alternate
            animationId={'main-content'}
          >
            <img src={logoImg} alt="Letmeask" />
            <h2>Crie uma nova sala</h2>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomName(event.target.value)}
              value={roomName}
            />
            <Button type="submit">Entrar na sala</Button>
            <p>
              Quer entrar em uma sala já existente?{' '}
              <Link to={ROUTES.Home()}>Clique aqui</Link>
            </p>
          </S.MainContent>
        </S.Form>
      </S.Main>
    </S.PageAuthWrapper>
  )
}
