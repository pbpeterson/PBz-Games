import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannersMock from 'components/BannerSlider/mock'
import GamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: BannersMock,
  newGames: [GamesMock[0]],
  mostPopularHighlight: HighlightMock,
  mostPopularGames: [GamesMock[0]],
  upcommingHighlight: HighlightMock,
  upcommingGames: [GamesMock[0]],
  upCommingMoreGames: [GamesMock[0]],
  freeGamesHighlight: HighlightMock,
  freeGames: [GamesMock[0]]
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/Defy death 1/i)).toHaveLength(1)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    expect(screen.getAllByText(/read dead it's back/i)).toHaveLength(3)
  })
})
