import styled from "styled-components";

export const Wrapper = styled.form`
  padding: 0.4em;

  & > input[type="text"] {
    width: 100%;
    padding: 0.6em;
    background-color: rgba(200, 200, 200, 1);
    border: 0;
    border-radius: 0.2em;
    font-size: 0.8rem;
    font-weight: bold;

    &:focus {
      background-color: rgb(120, 120, 120);
      transition: all 0.4s;
      color: white;
      &::placeholder {
        color: white;
      }
    }
  }
`;
