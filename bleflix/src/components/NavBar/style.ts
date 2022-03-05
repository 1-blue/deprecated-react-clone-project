import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 1em;
  margin-bottom: 2em;
  background-color: ${({ theme }) => theme.navColor};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
