import styled, { css, DefaultTheme } from 'styled-components'

const questionWrapperVariants = (theme: DefaultTheme) => ({
  answered: css`
    background: ${theme.colors.lightGray};
  `,
  highlighted: css`
    border: 0.1rem solid ${theme.colors.primary};
    background: ${theme.colors.grays[2]};
    & footer ${UserInfoWrapper} span {
      color: ${theme.colors.black};
    }
  `
})
type QuestionWrapperProps = {
  variant?: 'answered' | 'highlighted'
}

export const QuestionWrapper = styled.div<QuestionWrapperProps>`
  ${({ theme, variant }) => css`
    background: ${theme.colors.lightGray};
    border-radius: ${theme.radius.normal};
    box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.04);
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxsmall};
    ${variant && questionWrapperVariants(theme)[variant]}
    p {
      color: ${theme.colors.black};
    }
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: ${theme.spacings.small};

      button {
      }
    }
  `}
`
export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${theme.colors.grays[1]};
        gap: ${theme.spacings.xxsmall};
        &.liked {
          color: ${theme.colors.primary};

          svg path {
            stroke: ${theme.colors.primary};
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  `}
`
export const UserInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
    }
    span {
      margin-left: ${theme.spacings.xxsmall};
      color: ${theme.colors.grays[1]};
      font-size: ${theme.font.sizes.small};
    }
  `}
`
