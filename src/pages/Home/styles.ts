import styled, { css } from 'styled-components'
import AnimateCascade from '../../components/animation/AnimateCascade'

export const PageAuthWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  width: 100%;
`

export const Aside = styled.aside`
  ${({ theme }) => css`
    flex: 7;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 12rem 8rem;

    img {
      max-width: 32rem;
    }

    strong {
      font: ${theme.font.bold} cacl(1.28 * ${theme.font.sizes.xxlarge})
          'Poppins',
        sans-serif;
      line-height: 4.2rem;
      margin-top: ${theme.spacings.xsmall};
    }

    p {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: 3.2rem;
      margin-top: ${theme.spacings.xsmall};
      color: ${theme.colors.lightGray};
    }
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    flex: 8;
    padding: 0 ${theme.spacings.medium};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Form = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 32rem;
    align-items: stretch;
    text-align: center;

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.grays[1]};
      margin-top: ${theme.spacings.xsmall};

      a {
        color: ${theme.colors.pink};
      }
    }
  `}
`

export const CreateRoom = styled.button`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    height: 5rem;
    border-radius: ${theme.radius.normal};
    font-weight: ${theme.font.normal};
    background: ${theme.colors.red};
    color: ${theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
export const Separator = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.grays[0]};

    margin: ${theme.spacings.medium} 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 0.1rem;
      background: ${theme.colors.grays[0]};
      margin-right: ${theme.spacings.xsmall};
    }

    &::after {
      content: '';
      flex: 1;
      height: 0.1rem;
      background: ${theme.colors.grays[0]};
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MainContent = styled(AnimateCascade)`
  ${({ theme }) => css`
    > img {
      align-self: center;
    }

    h2 {
      font-size: ${theme.font.sizes.xxlarge};
      font-family: 'Poppins', sans-serif;
      margin: ${theme.spacings.xxlarge} 0 ${theme.spacings.small};
    }

    input {
      height: 5rem;
      border-radius: ${theme.radius.normal};
      padding: 0 ${theme.spacings.xsmall};
      background: ${theme.colors.white};
      border: 0.1rem solid ${theme.colors.grays[0]};
    }

    button {
      margin-top: ${theme.spacings.xsmall};
    }

    button,
    input {
      width: 100%;
    }
  `}
`
