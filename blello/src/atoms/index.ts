import { atom } from "recoil";

interface IBoards {
  [key: string]: ICard[];
}

export interface ICard {
  _id: number;
  text: string;
}

const dummyBoardData = {
  "to do": [
    { _id: 100, text: "Next.js 공부하기" },
    { _id: 101, text: "react-query 공부하기" },
  ],
  doing: [
    { _id: 200, text: "styled-components 공부하기" },
    { _id: 201, text: "typescript 공부하기" },
    { _id: 202, text: "Recoil 공부하기" },
  ],
  done: [
    { _id: 300, text: "React.js 공부하기" },
    { _id: 301, text: "webpack 공부하기" },
  ],
};

export const boardsAtom = atom<IBoards>({
  key: "boardsAtom",
  default: JSON.parse(localStorage.getItem("boards") as string) || dummyBoardData,
});

export const boardNamesAtom = atom<string[]>({
  key: "boardNamesAtom",
  default: JSON.parse(localStorage.getItem("boardNames") as string) || Object.keys(dummyBoardData),
});

export const themeState = atom<boolean>({
  key: "themeState",
  default: JSON.parse(localStorage.getItem("theme") as string) ?? true,
});
