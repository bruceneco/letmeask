import styled from 'styled-components'
import AnimateCascade from '../../components/animation/AnimateCascade'

export const PageAuthWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  width: 100%;
`

export const Aside = styled.aside`
  flex: 7;
  background: #835afd;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 12rem 8rem;

  img {
    max-width: 32rem;
  }

  strong {
    font: 700 3.6rem 'Poppins', sans-serif;
    line-height: 4.2rem;
    margin-top: 1.6rem;
  }

  p {
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-top: 1.6rem;
    color: #f8f8f8;
  }
`

export const Main = styled.main`
  flex: 8;
  padding: 0 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 32rem;
  align-items: stretch;
  text-align: center;

  p {
    font-size: 1.4rem;
    color: #737380;
    margin-top: 1.6rem;

    a {
      color: #e559f9;
    }
  }
`

export const MainContent = styled(AnimateCascade)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 32rem;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 2.4rem;
    font-family: 'Poppins', sans-serif;
    margin: 6.4rem 0 2.4rem;
  }

  input {
    height: 5rem;
    border-radius: 0.8rem;
    padding: 0 1.6rem;
    background: #fff;
    border: 0.1rem solid #a8a8b3;
  }

  button {
    margin-top: 1.6rem;
  }

  button,
  input {
    width: 100%;
  }
  p {
    padding-top: 2.4rem;
  }
`
