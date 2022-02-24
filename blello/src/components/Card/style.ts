import styled, { css } from "styled-components";

export const Wrapper = styled.li<{ isDragging: boolean }>`
  padding: 0.4em;
  margin-bottom: 0.4em;
  border-radius: 0.4em;
  box-shadow: ${({ isDragging }) => isDragging && "0 4px 10px black"};

  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bgColor};

  ${({ isDragging }) =>
    isDragging &&
    css`
      color: ${({ theme }) => theme.bgColor};
      background-color: ${({ theme }) => theme.textColor};
      font-weight: bold;
    `}
`;
