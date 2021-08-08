import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatImage Content';

    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'Content floatImage';
    ${Content} {
      text-align: left;
    }
    ${FloatImage} {
      justify-self: end;
    }
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    display: grid;
    grid-template-areas: 'floatImage Content';

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
    ${media.greaterThan('medium')`
      height:32rem`}

    ${!!alignment && wrapperModifiers[alignment!]()}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatImage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan('medium')`
    max-height:32rem`}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: Content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
    align-self: end;
    padding: ${theme.spacings.large};
  `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size:${theme.font.sizes.xxlarge}};

  `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size:${theme.font.sizes.large}}
  `}
  `}
`
