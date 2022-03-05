import React from "react";

import { motion } from "framer-motion";

import { Wrapper } from "./style";

const logoVarients = {
  initial: { fill: "rgba(45, 49, 250, 1)" },
  animate: {
    rotateY: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
    fill: "rgba(45, 49, 250, 1)",
  },
};

const Loader = () => {
  return (
    <Wrapper version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
      <motion.path
        d="M20,4c8.8,0,16,7.2,16,16s-7.2,16-16,16S4,28.8,4,20S11.2,4,20,4 M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0L20,0z"
        variants={logoVarients}
        initial="initial"
        animate="animate"
      />
      <motion.text transform="matrix(1 0 0 1 5.1018 30.5771)" fontSize="30px" variants={logoVarients}>
        Ｂ
      </motion.text>
    </Wrapper>
  );
};

export default Loader;
