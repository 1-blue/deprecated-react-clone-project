import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  & > li {
    margin-right: 0.6em;
  }
  & > li:last-child {
    margin-right: 0;
  }
`;
