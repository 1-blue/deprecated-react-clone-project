import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const Svg = styled(motion.svg)`
  width: 36px;
  height: 36px;
`;

const logoVarients = {
  initial: { pathLength: 0, fill: "rgba(45, 49, 250, 0)" },
  animate: {
    pathLength: 1,
    fill: "rgba(45, 49, 250, 1)",
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

const Logo = () => {
  return (
    <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
      <motion.path
        d="M20,4c8.8,0,16,7.2,16,16s-7.2,16-16,16S4,28.8,4,20S11.2,4,20,4 M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0L20,0z"
        fill="current"
        stroke="rgba(45, 49, 250, 1)"
        strokeWidth="1"
        variants={logoVarients}
        initial="initial"
        animate="animate"
      />
      <motion.text
        transform="matrix(1 0 0 1 5.1018 30.5771)"
        fill="current"
        fontSize="30px"
        variants={logoVarients}
        initial="initial"
        animate="animate"
      >
        Ｂ
      </motion.text>
    </Svg>
  );
};

export default Logo;
