import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from './highlight'

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
    FreeGames: games(where: { price: 0 }, sort: "price", limit: 8) {
      ...GameFragment
    }
    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      popularGames {
        title
        highlight {
          ...HighlightFragment
        }
        games(limit: 8) {
          ...GameFragment
        }
      }
      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
