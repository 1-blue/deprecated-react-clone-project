import { atom } from "recoil";

interface IItems {
  [key: string]: IItem[];
}

export interface IItem {
  _id: number;
  text: string;
}

export const itemsState = atom<IItems>({
  key: "itemsState",
  default: {
    "to do": [
      { _id: 100, text: "todo - a" },
      { _id: 101, text: "todo - b" },
      { _id: 102, text: "todo - c" },
      { _id: 103, text: "todo - d" },
      { _id: 104, text: "todo - e" },
      { _id: 105, text: "todo - f" },
      { _id: 106, text: "todo - g" },
      { _id: 107, text: "todo - h" },
      { _id: 108, text: "todo - i" },
      { _id: 109, text: "todo - j" },
      { _id: 110, text: "todo - k" },
      { _id: 111, text: "todo - l" },
    ],
    doing: [
      { _id: 200, text: "doing - a" },
      { _id: 201, text: "doing - b" },
    ],
    done: [
      { _id: 300, text: "done - a" },
      { _id: 301, text: "done - b" },
    ],
  },
});

export const themeState = atom<boolean>({
  key: "themeState",
  default: true,
});
