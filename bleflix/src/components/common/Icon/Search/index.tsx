import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Svg = styled(motion.svg)`
  position: absolute;
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.textColor};
  cursor: pointer;
  z-index: 1;
`;

const searchVarients = {
  initial: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  animate: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      default: {
        duration: 4,
      },
      fill: {
        duration: 2,
        delay: 2,
      },
    },
  },
};

interface SearchProps {
  searchOpen: boolean;
  onClick?: () => void;
}

const Search = ({ searchOpen, onClick }: SearchProps) => {
  return (
    <Svg
      version="1.1"
      id="layer"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
      onClick={onClick}
      animate={{ x: searchOpen ? 6 : 200 }}
      transition={{ type: "linear", duration: 0.4 }}
    >
      <motion.path
        d="M38.1,34.2l-9.2-9.2c1.3-2,2.1-4.5,2.1-7.1c0-7.2-5.8-13-13-13S5,10.8,5,18s5.8,13,13,13c3.1,0,6-1.1,8.2-2.9l9,9L38.1,34.2z M9,18c0-5,4-9,9-9s9,4,9,9s-4,9-9,9S9,23,9,18z"
        stroke="#ffffff"
        strokeWidth="0.4"
        variants={searchVarients}
        initial="initial"
        animate="animate"
      />
    </Svg>
  );
};

export default Search;
