import { screen, render } from '../../utils/test-utils'

import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Peterson" />)

    expect(screen.getByText(/peterson/i)).toBeInTheDocument()
  })
  it('should render the menu', () => {
    render(<UserDropdown username="Peterson" />)

    userEvent.click(screen.getByText(/peterson/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
