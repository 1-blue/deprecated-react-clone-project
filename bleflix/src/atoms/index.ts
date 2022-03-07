import { atom } from "recoil";

// type
import { IItem } from "@src/types";

export const randomNumberState = atom<number>({
  key: "randomNumber",
  default: Math.floor(Math.random() * 20),
});

export const mainMovieState = atom<null | IItem>({
  key: "mainMovieState",
  default: null,
});

export const mainTvState = atom<null | IItem>({
  key: "mainTvState",
  default: null,
});

export const themeState = atom<boolean>({
  key: "theme",
  default: JSON.parse(localStorage.getItem("theme") as string) ?? true,
});
