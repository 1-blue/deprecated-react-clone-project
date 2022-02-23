import styled, { css } from "styled-components";

interface IProps {
  isDone: boolean;
}

export const Wrapper = styled.li<IProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em;
  margin-bottom: 0.6em;
  border-radius: 0.2em;
  color: ${({ theme }) => theme.bgColor};
  background-color: ${({ theme }) => theme.textColor};

  animation-name: item;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  & .done-button {
    margin-right: 0.4em;
  }

  & .to-do-text {
    flex: 1;
    font-size: 1rem;
    font-weight: bold;

    ${({ isDone }) =>
      isDone &&
      css`
        color: gray;
        text-decoration: line-through;
      `};
  }

  & .buttons {
    display: inline-block;
    margin-left: 0.4em;

    & button[type="button"] {
      margin: 0 0.4em;
    }
  }
`;
