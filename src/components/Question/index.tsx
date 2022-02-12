import './styles.scss'
import { ReactNode } from 'react'
import cls from 'classnames'

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
  return (
    <div
      className={cls(
        'question',
        { highlight: isHighlighted && !isAnswered },
        { answered: isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div className="buttons">{children}</div>
      </footer>
    </div>
  )
}
