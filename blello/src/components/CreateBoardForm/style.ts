import styled from "styled-components";

export const Wrapper = styled.form`
  text-align: center;
  margin-bottom: 2em;

  & > input[type="text"] {
    border: 0;
    border-radius: 0.2em;
    padding: 0.6em;
    background-color: rgba(200, 200, 200, 1);

    font-size: 1rem;
    font-weight: bold;
  }
`;
