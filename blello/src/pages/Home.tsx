import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";

// atom
import { boardNamesAtom, boardsAtom } from "@src/atoms";

// components
import CreateBoardForm from "@src/components/CreateBoardForm";
import Board from "@src/components/Board";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & .board {
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const projectName = "#brello";

const Home = () => {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const [boardNames, setBoardNames] = useRecoilState(boardNamesAtom);

  // 2022/02/24 - 드래그&드랍 이후 실행할 이벤트 - by 1-blue
  const onDragEnd = useCallback(({ destination, source }: DropResult) => {
    // 이동하지 않았다면 즉시 종료
    if (!destination) return;

    // 출발/도착 인덱스
    const sourcePoint = source?.index;
    const destinationPoint = destination?.index;
    // 출발/도착 위치 ( doing, done, to do 같은 거 or #brello )
    const sourceTarget = source.droppableId;
    const destinationTarget = destination.droppableId;

    // 보드 이동 시 실행
    if (sourceTarget === projectName && destinationTarget === projectName) {
      setBoardNames(prev => {
        const boardNamesCopy = [...prev];

        const tempBoardName = boardNamesCopy.splice(sourcePoint, 1);
        boardNamesCopy.splice(destinationPoint, 0, ...tempBoardName);

        localStorage.setItem("boardNames", JSON.stringify(boardNamesCopy));

        return boardNamesCopy;
      });
    }
    // 카드 이동 시 실행
    else {
      // 출발보드와 도착보드가 같으면 실행
      if (sourceTarget === destinationTarget) {
        setBoards(prev => {
          const sourceBoardCopy = [...prev[sourceTarget]];

          const tempBoard = sourceBoardCopy.splice(sourcePoint, 1);
          sourceBoardCopy.splice(destinationPoint, 0, ...tempBoard);

          const newBoards = {
            ...prev,
            [destinationTarget]: sourceBoardCopy,
          };

          localStorage.setItem("boards", JSON.stringify(newBoards));

          return newBoards;
        });
      }
      // 출발보드와 도착보드가 다르다면
      else {
        setBoards(prev => {
          const destinationBoardCopy = [...prev[destinationTarget]];
          const sourceBoardCopy = [...prev[sourceTarget]];

          const tempBoard = sourceBoardCopy.splice(sourcePoint, 1);
          destinationBoardCopy.splice(destinationPoint, 0, ...tempBoard);

          const newBoards = {
            ...prev,
            [sourceTarget]: sourceBoardCopy,
            [destinationTarget]: destinationBoardCopy,
          };

          localStorage.setItem("boards", JSON.stringify(newBoards));

          return newBoards;
        });
      }
    }
  }, []);

  return (
    // 보드와 카드 드래그&드랍 같이 처리
    <DragDropContext onDragEnd={onDragEnd}>
      {/* 보드 드랍 영역 지정 */}
      <Droppable type="board" direction="horizontal" droppableId={projectName}>
        {boardProvided => (
          <Wrapper ref={boardProvided.innerRef} {...boardProvided.droppableProps}>
            {boardNames.map((key, index) => (
              <Board key={key} boardId={key} board={boards[key]} index={index} />
            ))}
            {boardProvided.placeholder}
            <CreateBoardForm />
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Home;
