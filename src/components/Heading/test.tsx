import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed.', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a lineLeft.', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a lineBottom.', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'background',
      '#F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a lineLeft.', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a render with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineBottom lineLeft>
        Most Populars
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        'border-left': '0.7rem solid #F231A5'
      }
    )
  }),
    it('should render huge size', () => {
      renderWithTheme(<Heading size="huge">Most Populars</Heading>)

      expect(
        screen.getByRole('heading', { name: /most populars/i })
      ).toHaveStyle({
        'font-size': '5.2rem'
      })
    })
})
