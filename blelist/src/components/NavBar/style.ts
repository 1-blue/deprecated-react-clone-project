import styled from "styled-components";

export const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 1em;
  margin-bottom: 2em;
  background-color: ${({ theme }) => theme.navColor};
  box-shadow: 0 0 20px black;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) and (max-width: 1600px) {
    max-width: 60vw;
    margin: auto;
  }
  @media (min-width: 1600px) {
    max-width: 60vw;
    margin: auto;
  }
`;
