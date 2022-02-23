import { atom, selector } from "recoil";

export enum Categories {
  ALL = -1,
  TO_DO,
  DOING,
  DONE,
}

export interface IToDoList {
  id: number;
  text: string;
  category: Categories;
}

export const themeState = atom<boolean>({
  key: "theme",
  default: JSON.parse(localStorage.getItem("theme") as string) ?? true,
});

export const toDoListState = atom<IToDoList[]>({
  key: "toDoListState",
  default: JSON.parse(localStorage.getItem("toDoList") as string) || [],
});

export const toDoCategoryState = atom<Categories>({
  key: "toDoCategoryState",
  default: JSON.parse(localStorage.getItem("category") as string) || Categories.ALL,
});

export const categoryToDoListState = selector({
  key: "categoryToDoListState",
  get: ({ get }) => {
    const category = get(toDoCategoryState);
    const toDoList = get(toDoListState);

    if (category === Categories.ALL) return toDoList;

    return toDoList.filter(toDo => toDo.category === category);
  },
});

export const toDoInfoSelector = selector({
  key: "toDoInfoSelector",
  get: ({ get }) => {
    const toDoList = get(toDoListState);
    const countArray = [0, 0, 0];

    toDoList.forEach(toDo => countArray[toDo.category]++);

    return `ToDo(✔️): ${countArray[Categories.TO_DO]}\nDoing(👁️): ${countArray[Categories.DOING]}\nDone(👌): ${
      countArray[Categories.DONE]
    }`;
  },
});
