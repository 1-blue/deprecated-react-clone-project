import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";

// hooks
import useInput from "@src/hooks/useInput";

// atom
import { boardNamesAtom, boardsAtom } from "@src/atoms";

// styled-component
import { Wrapper } from "./style";

const CreateBoardForm = () => {
  const setBoards = useSetRecoilState(boardsAtom);
  const setBoardNames = useSetRecoilState(boardNamesAtom);
  const [name, onChangeName, setName] = useInput("");

  // 2022/02/24 - createing board - by 1-blue
  const onCreateBoard = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // 보드 수정
      setBoards(prev => {
        const newBoards = {
          ...prev,
          [name]: [],
        };

        localStorage.setItem("boards", JSON.stringify(newBoards));

        return newBoards;
      });

      // 보드 이름 수정
      setBoardNames(prev => {
        const newBoardNames = [...prev, name];

        localStorage.setItem("boardNames", JSON.stringify(newBoardNames));

        return newBoardNames;
      });

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
