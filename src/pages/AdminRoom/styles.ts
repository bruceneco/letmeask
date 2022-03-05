import styled, { css } from 'styled-components'

export const AdminRoomWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};
  `}
`
export const Header = styled.header`
  ${({ theme }) => css`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80rem;
    padding: ${theme.spacings.small} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 4.5rem;
    }

    > div {
      display: flex;
      gap: ${theme.spacings.xsmall};

      button {
        height: 4rem;
      }
    }
  `}
`

export const Main = styled.main`
  max-width: 80rem;
  margin: 0 auto;
`

export const RoomTitle = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0 ${theme.spacings.small};
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.black};
    }

    span {
      margin-left: ${theme.spacings.xsmall};
      background: #e559f9;
      border-radius: 999px;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      color: #fff;
      font-weight: 500;
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const QuestionList = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`
