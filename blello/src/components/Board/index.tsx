import React from "react";
import { Droppable } from "react-beautiful-dnd";

// atom
import { IItem } from "@src/atoms";

// components
import Card from "@src/components/Card";
import CreateCardForm from "../CreateCardForm";

// styled-components
import { Wrapper, CardWrapper } from "./style";

const Board = ({ itemId, items }: { items: IItem[]; itemId: string }) => {
  return (
    <Wrapper className="board">
      <h3 className="board-title">{itemId}</h3>
      <Droppable droppableId={itemId}>
        {(provided, snapshot) => (
          <CardWrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingTo={snapshot.isDraggingOver}
            isDraggingFrom={!!snapshot.draggingFromThisWith}
          >
            {items.map((item, index) => (
              <Card key={item._id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </CardWrapper>
        )}
      </Droppable>

      <CreateCardForm itemId={itemId} />
    </Wrapper>
  );
};

export default Board;
