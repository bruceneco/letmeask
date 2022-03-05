import styled, { css } from 'styled-components'

export const RoomCodeWrapper = styled.button`
  ${({ theme }) => css`
    height: 4rem;
    border-radius: ${theme.radius.normal};
    overflow: hidden;

    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.primary};
    cursor: pointer;

    display: flex;
  `}
`

export const CopyImgWrapper = styled.div`
  ${({ theme }) => css`
    img {
      background: ${theme.colors.primary};
      padding: 0 calc(${theme.spacings.xxsmall} * 1.5);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
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
    font-size: 1.4rem;
    font-weight: 500;
  `}
`
