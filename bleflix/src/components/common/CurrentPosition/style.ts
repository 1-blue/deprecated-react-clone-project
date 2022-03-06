import styled from "styled-components";

export const Wrapper = styled.aside<{ currentPositionY: number }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 3px;
  background: ${({ theme }) => theme.textColor};
  box-shadow: 0 0 5px black;
  margin: 0;
  width: ${({ currentPositionY }) => currentPositionY * 100}%;
`;
