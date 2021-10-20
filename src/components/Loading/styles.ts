import styled, { css } from 'styled-components'

export const Loading = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 5rem;
    height: 5rem;
    border: 10px solid ${theme.colors.primary};
    border-right-color: ${theme.colors.lightGray};
    animation: rotate infinite 3s forwards;
    margin: 20rem auto;
  `}

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
