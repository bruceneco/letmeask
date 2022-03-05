import copyImg from '../../assets/images/copy.svg'
import * as S from './styles'

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <S.RoomCodeWrapper onClick={copyRoomCodeToClipboard}>
      <S.CopyImgWrapper>
        <img src={copyImg} alt="Copy room code" />
      </S.CopyImgWrapper>
      <S.RoomCode>Sala #{props.code}</S.RoomCode>
    </S.RoomCodeWrapper>
  )
}
