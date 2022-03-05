import styled from "styled-components";

export const Wrapper = styled.section<{ image: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  padding: 2em;

  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${({ image }) => image});
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.4em;
`;

export const Overview = styled.p`
  font-size: 1rem;
  width: 50%;
`;
