import styled from "styled-components";

export const Wrapper = styled.h2`
  display: flex;
  justify-content: center;

  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.mainColor};
  text-align: center;
  margin: 1em 0;
`;
