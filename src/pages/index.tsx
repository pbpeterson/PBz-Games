import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { Home as QueryHome } from 'graphql/generated/Home'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, NewGames, FreeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners),
      newGames: gamesMapper(NewGames),
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections?.popularGames?.games),
      mostPopularGamesTitle: sections?.popularGames?.title,
      freeGamesHighlight: highlightMapper(sections?.freeGames?.highlight),
      freeGames: gamesMapper(FreeGames),
      freeGamesTitle: sections?.freeGames?.title
    }
  }
}
