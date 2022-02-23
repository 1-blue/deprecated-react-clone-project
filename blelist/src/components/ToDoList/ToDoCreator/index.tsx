import React, { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// styled-component
import { Wrapper } from "./style";

// hook
import useInput from "@src/hooks/useInput";

// atom
import { toDoCategoryState, toDoListState } from "@src/atoms";

const ToDoCreator = () => {
  const category = useRecoilValue(toDoCategoryState);
  const setToDoList = useSetRecoilState(toDoListState);
  const [toDo, onChangeToDo, setToDo] = useInput("");

  // 2022/02/23 - submit to do - by 1-blue
  const onSumbitToDo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setToDoList(prev => {
        const computedToDoList = [...prev, { id: Date.now(), text: toDo, category }];
        localStorage.setItem("toDoList", JSON.stringify(computedToDoList));
        return computedToDoList;
      });

      setToDo("");
    },
    [toDo],
  );

  return (
    <Wrapper onSubmit={onSumbitToDo}>
      <label htmlFor="to-do-creator" hidden>
        to-do-creator
      </label>
      <input
        type="text"
        placeholder="📝할 일을 입력해주세요✏️"
        className="to-do-input"
        value={toDo}
        onChange={onChangeToDo}
      />
      <button type="submit" className="to-do-button">
        추가
      </button>
    </Wrapper>
  );
};

export default ToDoCreator;
