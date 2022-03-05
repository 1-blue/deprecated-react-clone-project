import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.section)`
  position: relative;
  top: -100px;
  margin: 0 80px;
`;

export const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

export const Box = styled(motion.div)<{ image: string }>`
  height: 200px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
`;

export const NextButton = styled(motion.button)`
  position: absolute;
  right: -80px;
  width: 80px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 30px;
`;
export const PrevButton = styled(motion.button)`
  position: absolute;
  left: -80px;
  width: 80px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 30px;
`;
