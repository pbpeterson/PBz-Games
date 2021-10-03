/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

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

export interface Home_sections_newGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface Home_sections_newGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface Home_sections_newGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: Home_sections_newGames_highlight_background | null;
  floatImage: Home_sections_newGames_highlight_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface Home_sections_newGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: Home_sections_newGames_highlight | null;
}

export interface Home_sections_popularGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface Home_sections_popularGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface Home_sections_popularGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: Home_sections_popularGames_highlight_background | null;
  floatImage: Home_sections_popularGames_highlight_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface Home_sections_popularGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface Home_sections_popularGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface Home_sections_popularGames_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: Home_sections_popularGames_games_cover | null;
  developers: Home_sections_popularGames_games_developers[];
  price: number;
}

export interface Home_sections_popularGames {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: Home_sections_popularGames_highlight | null;
  games: Home_sections_popularGames_games[];
}

export interface Home_sections_freeGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface Home_sections_freeGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface Home_sections_freeGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: Home_sections_freeGames_highlight_background | null;
  floatImage: Home_sections_freeGames_highlight_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface Home_sections_freeGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: Home_sections_freeGames_highlight | null;
}

export interface Home_sections {
  __typename: "Home";
  newGames: Home_sections_newGames | null;
  popularGames: Home_sections_popularGames | null;
  freeGames: Home_sections_freeGames | null;
}

export interface Home {
  banners: Home_banners[];
  NewGames: Home_NewGames[];
  FreeGames: Home_FreeGames[];
  sections: Home_sections | null;
}
