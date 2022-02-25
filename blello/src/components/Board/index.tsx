import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { Draggable, Droppable } from "react-beautiful-dnd";

// atom
import { boardNamesAtom, boardsAtom, ICard } from "@src/atoms";

// components
import Card from "@src/components/Card";
import CreateCardForm from "@src/components/CreateCardForm";

// styled-components
import { Wrapper, CardWrapper } from "./style";

interface IBoardProps {
  board: ICard[];
  boardId: string;
  index: number;
}

const Board = ({ board, boardId, index }: IBoardProps) => {
  const setBoardNames = useSetRecoilState(boardNamesAtom);
  const setBoards = useSetRecoilState(boardsAtom);

  // 2022/02/25 - 특정 보드 제거 - by 1-blue
  // 보드는 총 개수가 많지 않아서 반복적으로 제거함수를 생생해도 상관없다고 생각해서 하위 컴포넌트에 작성함
  const onRemoveBoard = useCallback(() => {
    // 보드 변경
    setBoards(prev => {
      const boardsCopy = { ...prev };
      delete boardsCopy[boardId];

      localStorage.setItem("boards", JSON.stringify(boardsCopy));

      return boardsCopy;
    });

    // 보드 이름 변경
    setBoardNames(prev => {
      const newBoardNames = prev.filter(name => name !== boardId);

      localStorage.setItem("boardNames", JSON.stringify(newBoardNames));

      return newBoardNames;
    });
  }, [boardId]);

  // 2022/02/25 - 특정 카드 제거 - by 1-blue
  const onRemoveCard = useCallback(
    boardIndex => () => {
      setBoards(prev => {
        const removedBoard = prev[boardId].filter((board, index) => index !== boardIndex);

        const newBoards = {
          ...prev,
          [boardId]: removedBoard,
        };

        localStorage.setItem("boards", JSON.stringify(newBoards));

        return newBoards;
      });
    },
    [boardId],
  );

  return (
    // 보드 드래그 영역 지정
    <Draggable key={"board-drag-" + index} draggableId={"board-drag-" + index} index={index}>
      {(boardProvided, boardSnapshot) => (
        <>
          <Wrapper
            ref={boardProvided.innerRef}
            {...boardProvided.draggableProps}
            isDragging={boardSnapshot.isDragging}
            className="board"
          >
            <div className="board-title" {...boardProvided.dragHandleProps}>
              <h3>{boardId}</h3>
              <button type="button" onClick={onRemoveBoard}>
                ❌
              </button>
            </div>
            {/* 카드 드랍 영역 지정 */}
            <Droppable droppableId={boardId}>
              {(cardProvided, cardSnapshot) => (
                <CardWrapper
                  ref={cardProvided.innerRef}
                  {...cardProvided.droppableProps}
                  isDraggingTo={cardSnapshot.isDraggingOver}
                  isDraggingFrom={!!cardSnapshot.draggingFromThisWith}
                >
                  {board.map((card, index) => (
                    <Card key={card._id} card={card} index={index} onRemoveCard={onRemoveCard} />
                  ))}
                  {cardProvided.placeholder}
                </CardWrapper>
              )}
            </Droppable>

            <CreateCardForm boardId={boardId} />
          </Wrapper>
        </>
      )}
    </Draggable>
  );
};

export default React.memo(Board);
