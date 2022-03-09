import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.section)`
  position: relative;
  top: -100px;
  margin: 0 80px 280px;
`;

export const CarouselTitle = styled.h2`
  margin-bottom: 0.6em;
`;

export const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media (max-width: 486px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 486px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1400px) and (max-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Box = styled(motion.div)`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }

  & span:last-child {
    border-radius: 0 0 4px 4px;
  }
`;

export const Image = styled(motion.figure)<{ image: string }>`
  height: 200px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
`;

export const Info = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  opacity: 0;
  padding: 0.6em;

  & span {
    display: block;
    margin-bottom: 0.4em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  & .title {
    font-weight: bold;
    margin-bottom: 0.4em;
  }

  & .release-date,
  .vote-average {
    font-size: 0.7rem;
    text-align: start;
  }
`;

export const NextButton = styled(motion.button)`
  position: absolute;
  right: -80px;
  width: 80px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 30px;
  opacity: 0;
`;
export const PrevButton = styled(motion.button)`
  position: absolute;
  left: -80px;
  width: 80px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 30px;
  opacity: 0;
`;
