import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
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
