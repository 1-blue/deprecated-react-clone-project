import styled, { css } from "styled-components";

export const Wrapper = styled.section<{ image: string; isDark: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-start;

  padding: 2em;

  ${({ isDark }) =>
    isDark
      ? css<{ image: string }>`
          background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${({ image }) => image});
        `
      : css<{ image: string }>`
          background-image: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0)),
            url(${({ image }) => image});
        `}
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.4em;
`;

export const Overview = styled.p`
  font-size: 1rem;
  width: 50%;
  margin-bottom: 16vh;
`;
