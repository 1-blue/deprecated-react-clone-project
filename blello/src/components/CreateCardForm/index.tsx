import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";

// atom
import { boardsAtom } from "@src/atoms";

// styled-component
import { Wrapper } from "./style";

// hook
import useInput from "@src/hooks/useInput";

const CreateCardForm = ({ boardId }: { boardId: string }) => {
  const setBoards = useSetRecoilState(boardsAtom);
  const [name, onChangeName, setName] = useInput("");

  const CreateCard = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setBoards(prev => {
        const sourceBoardCopy = [...prev[boardId]];

        sourceBoardCopy.push({ _id: Date.now(), text: name });

        const newBoards = {
          ...prev,
          [boardId]: sourceBoardCopy,
        };

        localStorage.setItem("boards", JSON.stringify(newBoards));

        return newBoards;
      });

      setName("");
    },
    [boardId, name],
  );

  return (
    <Wrapper onSubmit={CreateCard}>
      <label htmlFor="create-new-board" hidden>
        create-new-board
      </label>
      <input type="text" placeholder="➕ Add a card" value={name} onChange={onChangeName} />
      <button type="submit" hidden>
        Create Card
      </button>
    </Wrapper>
  );
};

export default CreateCardForm;
