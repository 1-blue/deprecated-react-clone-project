import styled, { css } from "styled-components";

interface ISpinnerWrapper {
  $button?: boolean;
}

export const Wrapper = styled.section<ISpinnerWrapper>`
  ${({ $button }) =>
    $button &&
    css`
      &,
      &:after {
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
      }
      & {
        margin: auto;
        font-size: 10px;
        text-indent: -9999em;
        border-top: 5px solid var(--light-blue);
        border-right: 5px solid rgba(0, 149, 246, 0.2);
        border-bottom: 5px solid rgba(0, 149, 246, 0.2);
        border-left: 5px solid rgba(0, 149, 246, 0.2);
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: spinner-button 1.1s infinite linear;
        animation: spinner-button 1.1s infinite linear;
      }
    `}
`;
