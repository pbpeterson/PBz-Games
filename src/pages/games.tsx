import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import mockFilterItems from 'components/ExploreSideBar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0] ? game.developers[0].name : 'Unknown',
        img: game.cover!.url,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price)
      })),
      filterItems: mockFilterItems
    }
  }
}

// title: string
// developer: string
// img: string
// price: string
