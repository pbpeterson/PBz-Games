import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { Home as QueryHome } from 'graphql/generated/Home'
import { QUERY_HOME } from 'graphql/queries/home'

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
        img: game.cover?.url || null,
        price: game.price
      })),
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: sections?.popularGames?.highlight?.background?.url,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink
      },
      mostPopularGames: sections?.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0] ? game.developers[0].name : 'Unknown',
        img: game.cover?.url || null,
        price: game.price
      })),
      mostPopularGamesTitle: sections?.popularGames?.title,
      freeGamesHighlight: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        backgroundImage: sections?.freeGames?.highlight?.background?.url,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink
      },
      freeGames: FreeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0] ? game.developers[0].name : 'Unknown',
        img: game.cover?.url || null,
        price: game.price
      })),
      freeGamesTitle: sections?.freeGames?.title
    }
  }
}
