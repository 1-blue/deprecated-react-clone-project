import React from "react";
import { Draggable } from "react-beautiful-dnd";

// styled-components
import { Wrapper } from "./style";

import { ICard } from "@src/atoms";

// common-components
import Icon from "@src/components/common/Icon";

interface ICardProps {
  card: ICard;
  index: number;
  onRemoveCard: (boardIndex: number) => () => void;
}

const Card = ({ card, index, onRemoveCard }: ICardProps) => {
  return (
    // 카드 드래그 영역 지정
    <Draggable key={card._id} draggableId={card._id + ""} index={index}>
      {(cardProvided, cardSnapshot) => (
        <>
          <Wrapper
            ref={cardProvided.innerRef}
            {...cardProvided.draggableProps}
            {...cardProvided.dragHandleProps}
            isDragging={cardSnapshot.isDragging}
          >
            <span>{card.text}</span>
            <Icon shape="trash" hoverFill="gray" width={20} height={20} onClick={onRemoveCard(index)} />
          </Wrapper>
        </>
      )}
    </Draggable>
  );
};

export default React.memo(Card);
