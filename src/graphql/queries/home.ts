import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_HOME = gql`
  query Home {
    banners {
      ...BannerFragment
    }
    NewGames: games(
      where: { release_date_lte: "2021-09-29" }
      sort: "release_date"
      limit: 8
    ) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`

// fragment GameFragment on Game {
//   name
//   slug
//   cover {
//     url
//   }
//   developers {
//     name
//   }
// }

// query Home {
//   FreeGames: games(where: { price: 0 }, sort: "price", limit: 8) {
//     ...GameFragment
//   }

//   NewGames: games(
//     where: { release_date_lte: "2021-09-29" }
//     sort: "release_date"
//     limit: 8
//   ) {
//     ...GameFragment
//   }
// }
