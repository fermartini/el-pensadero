import type { StringValidation } from "astro:schema";

export type Language = "es" | "en";

export interface HomeContent {
  title: string;
  subTitle: string;
  labelledby: string;
  blog: string;
  games: string;
  titleLayout: string;
  descriptionLayout: string;
  titleButton: string;
  readMore: string
}

export interface BlogContent {
  title: string;
  subTitle: string;
  x: string;
  read: string;
  readMore: string;
  titleLayout: string;
  descriptionLayout: string;
}

export interface GamesContent {
  title: string;
  titleLayout: string;
  descriptionLayout: string;
  titleGame: string;
  descriptionGame: string;
  hat:string;
  start: string;
  finishGame: string;
  cualities: string;
  fundador: string;
  element: string;
  yes: string;
  thinks: string;
  again: string;
  back: string;
  ask: string;
  of: string;
  interesting: string;
}


export interface BlogProps {
  blog: string;
  lang: string;
  titleButton: string;
  readMore: string
}