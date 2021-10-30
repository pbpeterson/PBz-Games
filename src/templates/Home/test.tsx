import 'match-media-mock'

import { screen, render } from '../../utils/test-utils'

import BannersMock from 'components/BannerSlider/mock'
import GamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: BannersMock,
  newGames: [GamesMock[0]],
  newGamesTitle: 'New Games',
  mostPopularHighlight: HighlightMock,
  mostPopularGames: [GamesMock[0]],
  mostPopularGamesTitle: 'Most Populars',
  freeGamesHighlight: HighlightMock,
  freeGames: [GamesMock[0]],
  freeGamesTitle: 'Free Games'
}

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    render(<Home {...props} />)

    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(3)
    expect(screen.getByTestId(/mock bannerslider/i)).toBeInTheDocument()
  })
})
