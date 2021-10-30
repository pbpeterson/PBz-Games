import { screen, render } from '../../utils/test-utils'

import Empty from '.'

const props = {
  title: 'Your wishlist is empty',
  description: 'A Simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    render(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: props.title }))
    expect(screen.getByText(props.description)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')
  })

  it('should not render link when hasLink is false', () => {
    render(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
