import { ReactNode, useMemo } from 'react'
import * as S from './styles'

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isHighlighted?: boolean
  isAnswered?: boolean
}

export function Question({
  content,
  author,
  children,
  isAnswered,
  isHighlighted
}: QuestionProps) {
  const variant = useMemo(() => {
    if (isAnswered) return 'answered'
    else if (isHighlighted) return 'highlighted'
  }, [isAnswered, isHighlighted])

  return (
    <S.QuestionWrapper variant={variant}>
      <p>{content}</p>
      <footer>
        <S.UserInfoWrapper>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </S.UserInfoWrapper>
        <S.ButtonsWrapper>{children}</S.ButtonsWrapper>
      </footer>
    </S.QuestionWrapper>
  )
}
