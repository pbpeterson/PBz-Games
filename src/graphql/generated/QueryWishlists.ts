/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlists
// ====================================================

export interface QueryWishlists_wishlists_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryWishlists_wishlists_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryWishlists_wishlists_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryWishlists_wishlists_games_cover | null;
  developers: QueryWishlists_wishlists_games_developers[];
  price: number;
}

export interface QueryWishlists_wishlists {
  __typename: "Wishlist";
  games: QueryWishlists_wishlists_games[];
}

export interface QueryWishlists {
  wishlists: QueryWishlists_wishlists[];
}

export interface QueryWishlistsVariables {
  identifier: string;
}
