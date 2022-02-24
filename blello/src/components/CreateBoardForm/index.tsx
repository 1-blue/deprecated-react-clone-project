import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";

// hooks
import useInput from "@src/hooks/useInput";

// atom
import { itemsState } from "@src/atoms";

// styled-component
import { Wrapper } from "./style";

const CreateBoardForm = () => {
  const setItems = useSetRecoilState(itemsState);
  const [name, onChangeName, setName] = useInput("");

  // 2022/02/24 - createing board - by 1-blue
  const onCreateBoard = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setItems(prev => ({
        ...prev,
        [name]: [],
      }));

      setName("");
    },
    [name],
  );

  return (
    <Wrapper onSubmit={onCreateBoard}>
      <label htmlFor="create-new-board" hidden>
        create-new-board
      </label>
      <input type="text" id="create-new-board" value={name} onChange={onChangeName} placeholder="➕ Add another list" />
      <button type="submit" hidden>
        Create Board
      </button>
    </Wrapper>
  );
};

export default CreateBoardForm;
