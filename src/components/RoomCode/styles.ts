import styled, { css } from 'styled-components'

export const RoomCodeWrapper = styled.button`
  ${({ theme }) => css`
    height: 4rem;
    border-radius: ${theme.radius.normal};
    overflow: hidden;
    margin-left: ${theme.spacings.xsmall};
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.primary};
    cursor: pointer;

    display: flex;
  `}
`

export const CopyImgWrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      padding: 0 calc(${theme.spacings.xxsmall} * 1.5);
    }
  `}
`

export const RoomCode = styled.span`
  ${({ theme }) => css`
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 ${theme.spacings.xsmall} 0 calc(${theme.spacings.xxsmall} * 1.5);
    width: fit-content;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`
