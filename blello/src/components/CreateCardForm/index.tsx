import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";

// atom
import { itemsState } from "@src/atoms";

// styled-component
import { Wrapper } from "./style";

// hook
import useInput from "@src/hooks/useInput";

const CreateCardForm = ({ itemId }: { itemId: string }) => {
  const setItems = useSetRecoilState(itemsState);
  const [name, onChangeName, setName] = useInput("");

  const CreateCard = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setItems(prev => {
        const sourceBoardCopy = [...prev[itemId]];

        sourceBoardCopy.push({ _id: Date.now(), text: name });

        return {
          ...prev,
          [itemId]: sourceBoardCopy,
        };
      });

      setName("");
    },
    [itemId, name],
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
