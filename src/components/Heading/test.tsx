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
      'border-left': '0.7rem solid #3CD3C1'
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
})
