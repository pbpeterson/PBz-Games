import { screen, render } from '../../utils/test-utils'

import theme from 'styles/theme'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    render(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
  it('should render the menu with an activeLink defined', () => {
    render(<ProfileMenu activeLink="/profile/orders" />)

    expect(screen.getByRole('link', { name: /my orders/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
