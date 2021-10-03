/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL query operation: Home
// ====================================================

export interface Home_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface Home_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface Home_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface Home_banners {
  __typename: "Banner";
  image: Home_banners_image | null;
  title: string;
  subtitle: string;
  button: Home_banners_button | null;
  ribbon: Home_banners_ribbon | null;
}

export interface Home_NewGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface Home_NewGames_developers {
  __typename: "Developer";
  name: string;
}

export interface Home_NewGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: Home_NewGames_cover | null;
  developers: Home_NewGames_developers[];
  price: number;
}

export interface Home_FreeGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface Home_FreeGames_developers {
  __typename: "Developer";
  name: string;
}

export interface Home_FreeGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: Home_FreeGames_cover | null;
  developers: Home_FreeGames_developers[];
  price: number;
}

export interface Home {
  banners: Home_banners[];
  NewGames: Home_NewGames[];
  FreeGames: Home_FreeGames[];
}
