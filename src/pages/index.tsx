import Home, { HomeTemplateProps } from 'templates/Home'

import GamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { Home as QueryHome } from 'graphql/generated/Home'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, NewGames }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: banner.image?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ribbon: banner.ribbon?.text || null,
        ribbonColor: banner.ribbon?.color || null,
        ribbonSize: banner.ribbon?.size || null
      })),
      newGames: NewGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0] ? game.developers[0].name : 'Unknown',
        img: game.cover?.url,
        price: game.price
      })),
      mostPopularHighlight: HighlightMock,
      mostPopularGames: GamesMock,
      upcommingHighlight: HighlightMock,
      upcommingGames: GamesMock,
      upCommingMoreGames: GamesMock,
      freeGamesHighlight: HighlightMock,
      freeGames: GamesMock
    }
  }
}
