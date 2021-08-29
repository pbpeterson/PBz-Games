import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and  children', () => {
    const mainHeading = 'All your favorite games in one place'
    const subtitle = 'WON is the best and most complete gaming plataform'
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    expect(
      screen.getByRole('heading', { name: 'Auth Title' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: mainHeading })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: subtitle })).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
