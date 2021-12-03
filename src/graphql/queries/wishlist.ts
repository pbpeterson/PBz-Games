import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import {
  QueryWishlists,
  QueryWishlistsVariables
} from 'graphql/generated/QueryWishlists'

export const QUERY_WISHLIST = gql`
  query QueryWishlists($identifier: String!) {
    wishlists(where: { user: { email: $identifier } }) {
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`
export function useQueryWishlist(
  options?: QueryHookOptions<QueryWishlists, QueryWishlistsVariables>
) {
  return useQuery<QueryWishlists, QueryWishlistsVariables>(
    QUERY_WISHLIST,
    options
  )
}
