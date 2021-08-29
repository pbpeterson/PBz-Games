import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
  grid-template-columns: 1fr 1fr;

  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    background-image: url('/img/auth-bg.jpg');
    background-position: center center;
    background-size: cover;
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }
    ${media.lessThan('medium')`
    display:none`}
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    z-index: 1;
    position: absolute;
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    height: 90vh;
    justify-content: space-between;

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
    ${media.greaterThan('medium')`
    width: 36rem;
    `}
  `}
`
