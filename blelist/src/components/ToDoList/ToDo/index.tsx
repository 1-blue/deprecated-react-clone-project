import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";

// styled-component
import { Wrapper } from "./style";

// atom
import { Categories, IToDoList, toDoListState } from "@src/atoms";

// common-component
import Icon from "@src/components/common/Icon";

const ToDo = ({ id, text, category }: IToDoList) => {
  const setToDoList = useSetRecoilState(toDoListState);

  // 2022/02/23 - toggle done - by 1-blue
  const onClickToggleDone = useCallback(() => {
    setToDoList(prev => {
      const computedToDoList = prev.map(v => {
        if (v.id !== id) return v;

        return {
          ...v,
          category: v.category === Categories.TO_DO ? Categories.DONE : Categories.TO_DO,
        };
      });

      localStorage.setItem("toDoList", JSON.stringify(computedToDoList));

      return computedToDoList;
    });
  }, []);

  // 2022/02/23 - toggle doing - by 1-blue
  const onClickToggleDoing = useCallback(() => {
    setToDoList(prev => {
      const computedToDoList = prev.map(v => {
        if (v.id !== id) return v;

        return {
          ...v,
          category: v.category === Categories.DOING ? Categories.DONE : Categories.DOING,
        };
      });

      localStorage.setItem("toDoList", JSON.stringify(computedToDoList));

      return computedToDoList;
    });
  }, []);

  // 2022/02/23 - remove item - by 1-blue
  const onClickRemove = useCallback(
    () =>
      setToDoList(prev => {
        const computedToDoList = prev.filter(v => v.id !== id);

        localStorage.setItem("toDoList", JSON.stringify(computedToDoList));

        return computedToDoList;
      }),
    [],
  );

  return (
    <Wrapper isDone={category === Categories.DONE}>
      <button type="button" onClick={onClickToggleDone} className="done-button">
        {category === Categories.DONE ? "👌" : <Icon shape="check" />}
      </button>
      <span className="to-do-text">{text}</span>
      <div className="buttons">
        <button type="button" onClick={onClickToggleDoing}>
          {category === Categories.DOING ? <Icon shape="strokeEye" /> : <Icon shape="eye" />}
        </button>
        <button type="button" onClick={onClickRemove}>
          <Icon shape="trash" />
        </button>
      </div>
    </Wrapper>
  );
};

export default ToDo;
