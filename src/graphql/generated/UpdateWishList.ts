/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateWishList
// ====================================================

export interface UpdateWishList_updateWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface UpdateWishList_updateWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface UpdateWishList_updateWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: UpdateWishList_updateWishlist_wishlist_games_cover | null;
  developers: UpdateWishList_updateWishlist_wishlist_games_developers[];
  price: number;
}

export interface UpdateWishList_updateWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  games: UpdateWishList_updateWishlist_wishlist_games[];
}

export interface UpdateWishList_updateWishlist {
  __typename: "updateWishlistPayload";
  wishlist: UpdateWishList_updateWishlist_wishlist | null;
}

export interface UpdateWishList {
  updateWishlist: UpdateWishList_updateWishlist | null;
}

export interface UpdateWishListVariables {
  input: updateWishlistInput;
}
