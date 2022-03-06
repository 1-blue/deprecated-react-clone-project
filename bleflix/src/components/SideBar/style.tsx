import styled from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  right: 2vh;
  bottom: 2vh;
  z-index: 1;
  opacity: 0.8;

  & .side-button {
    font-size: 1.8rem;
    background-color: ${({ theme }) => theme.textColor};
    border-radius: 100%;
    padding: 0.4em;
    box-shadow: 0 0 10px ${({ theme }) => theme.textColor};
    &:first-child {
      margin-right: 0.6em;
    }
  }

  & .move-top-button {
    animation-name: appear;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }
`;
