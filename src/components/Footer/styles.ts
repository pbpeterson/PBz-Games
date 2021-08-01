import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, 1fr)`}
  `}
`
export const Column = styled.div`
  ${({ theme }) => css`
    nav,
    a {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`
export const Copyright = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    text-align: center;
  `}
`
