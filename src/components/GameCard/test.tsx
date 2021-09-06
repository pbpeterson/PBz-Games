import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: '235'
}

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Add to Wishlist')).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /population zero/i })
    ).toHaveAttribute('src', props.img)
  })

  it('should render a price in label', () => {
    renderWithTheme(<GameCard {...props} ribbon="<p>Teste</p>" />)

    expect(screen.getByText('235')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText('235')).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render a line-through when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice={'20'} {...props} />)

    expect(screen.getByText('235')).toBeInTheDocument()

    expect(screen.getByText('235')).toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText('20')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard favorite {...props} />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard onFav={onFav} {...props} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})
