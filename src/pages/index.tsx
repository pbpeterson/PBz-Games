import Home, { HomeTemplateProps } from 'templates/Home'

import BannersMock from 'components/BannerSlider/mock'
import GamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: BannersMock,
      newGames: GamesMock,
      mostPopularHighlight: HighlightMock,
      mostPopularGames: GamesMock,
      upComingHighlight: HighlightMock,
      upComingGames: GamesMock,
      upComingMoreGames: GamesMock,
      freeGamesHighlight: HighlightMock,
      freeGames: GamesMock
    }
  }
}
