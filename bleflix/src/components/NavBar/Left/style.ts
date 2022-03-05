import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    position: relative;
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Circle = styled(motion.div)`
  position: absolute;
  bottom: -14px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.lightMainColor};
`;
