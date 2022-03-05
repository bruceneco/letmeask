import styled, { css } from 'styled-components'

export const RoomWrapper = styled.div`
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
  max-width: 112rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 4.5rem;
  }
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
      background: ${theme.colors.pink};
      border-radius: 999px;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      color: ${theme.colors.white};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
  }

  span {
    margin-left: 0.8rem;
    color: #29292e;
    font-weight: 500;
    font-size: 1.4rem;
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;

  > span {
    font-size: 1.4rem;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 1.6rem;
  border-radius: 0.8rem;
  background: #fefefe;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.04);
  resize: vertical;
  min-height: 13rem;
`

export const QuestionList = styled.div`
  margin-top: 3.2rem;
`
