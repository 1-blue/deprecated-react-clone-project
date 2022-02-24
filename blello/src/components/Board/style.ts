import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 272px;
  min-height: 400px;
  border-radius: 0.4em;
  background-color: ${({ theme }) => theme.boardColor};

  & .board-title {
    text-align: center;
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.textColor};
    padding: 0.4em 0;
    border-radius: 0.2em 0.2em 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.bgColor};
  }
`;

export const CardWrapper = styled.ul<{ isDraggingTo: boolean; isDraggingFrom: boolean }>`
  flex: 1;
  padding: 0.4em;
  background-color: ${({ isDraggingTo, isDraggingFrom, theme }) =>
    isDraggingTo ? theme.draggingStartBoardColor : isDraggingFrom ? theme.draggingEndBoardColor : theme.boardColor};
`;
