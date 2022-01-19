import 'session.mock'
import { screen, render } from '../../utils/test-utils'

import GameCard from '.'

const props = {
  id: '1',
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /population zero/i })
    ).toHaveAttribute('src', props.img)

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
  })

  it('should render a price in label', () => {
    render(<GameCard {...props} ribbon="<p>Teste</p>" />)

    expect(screen.getByText('$235.00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText('$235.00')).toHaveStyle({
      'background-color': '#FF0005'
    })
  })

  it('should render a line-through when promotional', () => {
    render(<GameCard promotionalPrice={20} {...props} />)

    expect(screen.getByText('$235.00')).toBeInTheDocument()

    expect(screen.getByText('$235.00')).toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText('$20.00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })
})
