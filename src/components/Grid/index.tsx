import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    margin: ${theme.spacings.medium} 0;
    gap: ${theme.spacings.medium};
  `}
`
