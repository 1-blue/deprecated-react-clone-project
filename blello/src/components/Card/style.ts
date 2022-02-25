import styled, { css } from "styled-components";

export const Wrapper = styled.li<{ isDragging: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em;
  margin-bottom: 0.4em;
  border-radius: 0.4em;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bgColor};

  ${({ isDragging }) =>
    isDragging &&
    css`
      color: ${({ theme }) => theme.bgColor};
      background-color: ${({ theme }) => theme.textColor};
      font-weight: bold;
      box-shadow: 0 4px 10px black;
    `}
`;
