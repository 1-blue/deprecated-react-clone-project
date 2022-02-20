import styled, { css } from "styled-components";

interface IIconWrapper {
  hoverFill?: string;
  animation?: string;
}

interface IHoverFill {
  hoverFill?: string;
}
interface IAnimation {
  animation?: string;
}

export const Wrapper = styled.i<IIconWrapper>`
  cursor: pointer;
  ${({ hoverFill }) =>
    hoverFill &&
    css<IHoverFill>`
      & > svg:hover {
        fill: ${({ hoverFill }) => hoverFill};
      }
    `}
  ${({ animation }) =>
    animation &&
    css<IAnimation>`
      & > svg {
        animation-name: ${({ animation }) => animation};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: forwards;
      }
    `}
`;
