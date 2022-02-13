import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './index'

const buttonVariants = (theme: DefaultTheme) => ({
  outlined: css`
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  `
})

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    height: 5rem;
    border-radius: ${theme.radius.normal};
    font-weight: ${theme.font.bold};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.medium};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    ${variant && buttonVariants(theme)[variant]}
  `}
`
