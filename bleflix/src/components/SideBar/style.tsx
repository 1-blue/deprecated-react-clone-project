import styled from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  right: 2vh;
  bottom: 2vh;
  & .side-button {
    font-size: 1.8rem;
    background-color: ${({ theme }) => theme.textColor};
    border-radius: 100%;
    padding: 0.4em;
    box-shadow: 2px 2px 20px ${({ theme }) => theme.textColor};
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
