/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateWishList
// ====================================================

export interface CreateWishList_createWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface CreateWishList_createWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface CreateWishList_createWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: CreateWishList_createWishlist_wishlist_games_cover | null;
  developers: CreateWishList_createWishlist_wishlist_games_developers[];
  price: number;
}

export interface CreateWishList_createWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  games: CreateWishList_createWishlist_wishlist_games[];
}

export interface CreateWishList_createWishlist {
  __typename: "createWishlistPayload";
  wishlist: CreateWishList_createWishlist_wishlist | null;
}

export interface CreateWishList {
  createWishlist: CreateWishList_createWishlist | null;
}

export interface CreateWishListVariables {
  input: createWishlistInput;
}
