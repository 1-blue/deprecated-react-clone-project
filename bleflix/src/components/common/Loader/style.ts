import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.svg)`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 200px;
  height: 200px;

  transform: translateY(-50%);
  fill: rgba(45, 49, 250, 1);
`;
