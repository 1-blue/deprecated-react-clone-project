import { atom } from "recoil";

// type
import { IItem } from "@src/types";

// 메인 영화 포스터 보여줄 때 사용할 랜덤 숫자
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
