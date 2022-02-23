import React, { useCallback } from "react";
import { useRecoilState } from "recoil";

// styled-component
import { Wrapper } from "./stlye";

// atom
import { Categories, toDoCategoryState } from "@src/atoms";

const ToDoOption = () => {
  const [toDoCategory, setToDoCategory] = useRecoilState(toDoCategoryState);

  const onChangeCategory = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    setToDoCategory(+e.currentTarget.value);

    localStorage.setItem("category", e.currentTarget.value);
  }, []);

  return (
    <Wrapper>
      <label htmlFor="select-category" hidden>
        select-category
      </label>
      <select id="select-category" value={toDoCategory} onChange={onChangeCategory} className="select-category">
        <option value={Categories.ALL}>ALL</option>
        <option value={Categories.TO_DO}>TO_DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
    </Wrapper>
  );
};

export default ToDoOption;
