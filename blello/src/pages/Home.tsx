import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";

// atom
import { itemsState } from "@src/atoms";

// components
import CreateBoardForm from "@src/components/CreateBoardForm";
import Board from "@src/components/Board";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & > .board {
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Home = () => {
  const [items, setItems] = useRecoilState(itemsState);

  // 2022/02/24 - 드래그&드랍 이후 실행할 이벤트 - by 1-blue
  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      // 이동하지 않았다면 즉시 종료
      if (!destination) return;

      // 출발/도착지 인덱스값 | 출발/도착지의 보드 식별값 ( 보드명 )
      const sourcePoint = source?.index;
      const destinationPoint = destination?.index;
      const sourceTarget = source.droppableId;
      const destinationTarget = destination.droppableId;

      // 출발보드와 도착보드가 같다면
      if (sourceTarget === destinationTarget) {
        setItems(prev => {
          const sourceBoardCopy = [...prev[sourceTarget]];

          const tempBoard = sourceBoardCopy.splice(sourcePoint, 1);
          sourceBoardCopy.splice(destinationPoint, 0, ...tempBoard);

          return {
            ...prev,
            [destinationTarget]: sourceBoardCopy,
          };
        });
      }
      // 출발보드와 도착보드가 다르다면
      else {
        setItems(prev => {
          const destinationBoardCopy = [...prev[destinationTarget]];
          const sourceBoardCopy = [...prev[sourceTarget]];

          const tempBoard = sourceBoardCopy.splice(sourcePoint, 1);
          destinationBoardCopy.splice(destinationPoint, 0, ...tempBoard);

          return {
            ...prev,
            [sourceTarget]: sourceBoardCopy,
            [destinationTarget]: destinationBoardCopy,
          };
        });
      }
    },
    [setItems],
  );

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(items).map(key => (
          <Board key={key} itemId={key} items={items[key]} />
        ))}
      </DragDropContext>
      <CreateBoardForm />
    </Wrapper>
  );
};

export default Home;
