import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

  & .to-do-input {
    padding: 0.4em 1em;
    border: 0;
    border-radius: 0.4em 0 0 0.4em;
    font-size: 1.2rem;

    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};

    &::placeholder {
      font-weight: bold;
      color: ${({ theme }) => theme.bgColor};
    }
  }

  & .to-do-button {
    padding: 0.4em 0.6em;
    border: 0;
    border-radius: 0 0.4em 0.4em 0;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: ${({ theme }) => theme.mainColor};
    color: white;
  }
`;
