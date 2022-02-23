import styled from "styled-components";

export const Wrapper = styled.form`
  margin-bottom: 1em;
  text-align: center;

  & .select-category {
    width: calc(342px / 2);
    border: 0;
    padding: 0.4em;
    border-radius: 0.4em;
    font-weight: bold;
    font-size: 1rem;

    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
`;
