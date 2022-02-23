import styled from "styled-components";

export const Wrapper = styled.section`
  & .title,
  .sub-title {
    text-align: center;
  }

  & .title {
    font-size: 2rem;
  }

  & .sub-title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1.4em;
  }
`;
