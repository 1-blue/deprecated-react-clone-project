import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  & .coin-spinner-image {
    animation-name: spinner;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
  }
`;
