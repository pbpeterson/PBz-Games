import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const MUTATION_CREATE_WISHLIST = gql`
  mutation CreateWishList($input: createWishlistInput!) {
    createWishlist(input: $input) {
      wishlist {
        id
        games {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation UpdateWishList($WishlistProps: updateWishlistInput) {
    updateWishlist(input: $WishlistProps) {
      wishlist {
        id
        games {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`
