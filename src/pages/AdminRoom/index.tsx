import { useHistory, useParams } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import highlightImg from '../../assets/images/answer.svg'
import { Button } from '../../components/Button'
import { RoomCode } from '../../components/RoomCode'
import { database } from '../../services/firebase'
import { Question } from '../../components/Question'
import { useRoom } from '../../hooks/useRoom'
import { ROUTES } from '../../App'
import * as S from './styles'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const params = useParams<RoomParams>()
  const roomId = params.id
  const history = useHistory()
  const { questions, roomName } = useRoom(roomId)

  async function handleCloseRoom() {
    if (window.confirm('Tem certeza que deseja encerrar essa sala?')) {
      await database.ref(`rooms/${roomId}`).update({
        closedAt: new Date()
      })
      history.push(ROUTES.Home())
    }
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Deseja realmente excluir essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  return (
    <S.AdminRoomWrapper>
      <S.Header>
        <S.Content>
          <img src={logoImg} alt="Letmeask logo" />
          <div>
            <RoomCode code={roomId} />
            <Button variant="outlined" onClick={handleCloseRoom}>
              Encerrar Sala
            </Button>
          </div>
        </S.Content>
      </S.Header>
      <S.Main>
        <S.RoomTitle>
          <h1>Sala {roomName}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </S.RoomTitle>
        <S.QuestionList>
          {questions.map((question) => (
            <Question
              isHighlighted={question.isHighlighted}
              isAnswered={question.isAnswered}
              key={question.id}
              content={question.content}
              author={question.author}
            >
              <button
                type="button"
                onClick={() => handleCheckQuestionAsAnswered(question.id)}
              >
                <img src={checkImg} alt="Marcar pergunta como respondida" />
              </button>
              <button
                type="button"
                onClick={() => handleHighlightQuestion(question.id)}
              >
                <img src={highlightImg} alt="Dar destaque à pergunta" />
              </button>
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Deletar pergunta" />
              </button>
            </Question>
          ))}
        </S.QuestionList>
      </S.Main>
    </S.AdminRoomWrapper>
  )
}
