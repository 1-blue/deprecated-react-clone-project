import React from "react";
import { Draggable } from "react-beautiful-dnd";

// styled-components
import { Wrapper } from "./style";

interface ICardProps {
  item: {
    _id: number;
    text: string;
  };
  index: number;
}

const Card = ({ item, index }: ICardProps) => {
  return (
    <Draggable key={item._id} draggableId={item._id + ""} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {item.text}
        </Wrapper>
      )}
    </Draggable>
  );
};

export default React.memo(Card);
