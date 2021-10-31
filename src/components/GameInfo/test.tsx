import { screen, render } from '../../utils/test-utils'

import GameInfo from '.'

const props = {
  id: '1',
  title: 'My game title',
  description: 'My game description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render the heading', () => {
    render(<GameInfo {...props} />)

    //esperar por um heading (title)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    //esperar por description
    expect(screen.getByText(props.description)).toBeInTheDocument()
    //esperar pelo price
    expect(screen.getByText(/210.0/i)).toBeInTheDocument()
  })
  it('should render buttons', () => {
    render(<GameInfo {...props} />)

    //esperar por button add to cart
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    //esperar por button wishlist
  })
})
