import React, { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";

// types
import { movie } from "@src/types";

// styled-component
import { Wrapper, Row, Box, NextButton, PrevButton } from "./style";

// util
import { movieFormat } from "@src/utils";

const carouselVariants = {
  initial: (isRight: boolean) => ({
    x: isRight ? window.innerWidth : -window.innerWidth,
  }),
  animate: {
    x: 0,
  },
  exit: (isRight: boolean) => ({
    x: isRight ? -window.innerWidth : window.innerWidth,
  }),
};

const offset = 6;

const Carousel = ({ movies }: { movies: movie[] }) => {
  const [index, setIndex] = useState<number>(0);
  const [doing, setDoing] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(false);

  // 2022/03/05 - 인덱스 증가/감소 - by 1-blue
  const increaseIndex = useCallback(() => {
    if (doing) return;
    setDoing(true);
    setIsRight(true);

    const point = Math.ceil(movies.length / offset);

    setIndex(prev => (point <= prev + 1 ? 0 : prev + 1));
  }, [doing]);
  const decreaseIndex = useCallback(() => {
    if (doing) return;
    setDoing(true);
    setIsRight(false);

    const point = Math.ceil(movies.length / offset);

    setIndex(prev => (-1 >= prev - 1 ? point - 1 : prev - 1));
  }, [movies, doing]);

  return (
    <Wrapper>
      <AnimatePresence initial={false} onExitComplete={() => setDoing(false)} custom={isRight}>
        <Row
          custom={isRight}
          variants={carouselVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
          key={index}
        >
          {movies.slice(offset * index, offset * index + offset).map(movie => (
            <Box key={movie.id} image={movieFormat({ path: movie.backdrop_path, format: "w500" })} />
          ))}
        </Row>
      </AnimatePresence>

      <NextButton
        type="button"
        onClick={increaseIndex}
        whileHover={{ fontSize: "50px" }}
        transition={{ duration: 0.2 }}
      >
        👉
      </NextButton>
      <PrevButton
        type="button"
        onClick={decreaseIndex}
        whileHover={{ fontSize: "50px" }}
        transition={{ duration: 0.2 }}
      >
        👈
      </PrevButton>
    </Wrapper>
  );
};

export default Carousel;
