import { screen, render } from '../../utils/test-utils'

import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white label by default', () => {
    render(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed.', () => {
    render(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a lineLeft.', () => {
    render(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #EF3C4E'
    })
  })

  it('should render a lineBottom.', () => {
    render(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'background',
      '#EF3C4E',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a lineLeft.', () => {
    render(<Heading size="small">Won Games</Heading>)

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
    render(
      <Heading lineColor="primary" lineBottom lineLeft>
        Most Populars
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        'border-left': '0.7rem solid #EF3C4E'
      }
    )
  }),
    it('should render huge size', () => {
      render(<Heading size="huge">Most Populars</Heading>)

      expect(
        screen.getByRole('heading', { name: /most populars/i })
      ).toHaveStyle({
        'font-size': '5.2rem'
      })
    })
})
