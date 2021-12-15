import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
  `}
`

export const CheckMark = styled.div`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    background: ${theme.colors.primary};
    border-radius: 50%;
    margin: 4rem 0;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    text-align: center;
    max-width: 70rem;

    a {
      color: ${theme.colors.primary};
    }
  `}
`
