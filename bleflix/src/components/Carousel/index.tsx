import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// types
import { IItem, ITEM_KINDS } from "@src/types";

// styled-component
import { Wrapper, Row, Box, Image, Info, NextButton, PrevButton, CarouselTitle } from "./style";

// util
import { itemFormat } from "@src/utils";

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
const boxVariants = {
  hover: {
    scale: 1.4,
    y: -40,
    boxShadow: "0 0 10px black",
    zIndex: 1,
    borderRadius: "4px",
    transition: {
      type: "tween",
      delay: 0.4,
      duration: 0.4,
    },
  },
};
const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.4,
      duration: 0.4,
    },
  },
};

const Carousel = ({ kinds, title, items }: { kinds: ITEM_KINDS; title: string; items: IItem[] }) => {
  const { pathname } = useLocation(); // path를 기준으로 모달창을 보여주기 때문에 현재 위치가 home인지 다른 디테일 페이지인지 판단하기 위해 사용하는 변수
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(0);
  const [doing, setDoing] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(false);
  const identifier = title + pathname;
  const [offset, setOffset] = useState<number>(6);

  // 2022/03/08 - offset 지정 - by 1-blue
  useEffect(() => {
    const changeOffset = () => {
      if (window.innerWidth <= 486) setOffset(1);
      else if (window.innerWidth <= 768) setOffset(2);
      else if (window.innerWidth <= 1024) setOffset(3);
      else if (window.innerWidth <= 1400) setOffset(4);
      else if (window.innerWidth <= 1800) setOffset(5);
    };
    changeOffset();

    window.addEventListener("resize", changeOffset);

    return () => window.removeEventListener("resize", changeOffset);
  }, []);

  // 2022/03/05 - 인덱스 증가/감소 - by 1-blue
  const increaseIndex = useCallback(() => {
    if (doing) return;
    setDoing(true);
    setIsRight(true);

    const point = Math.ceil(items.length / offset);

    setIndex(prev => (point <= prev + 1 ? 0 : prev + 1));
  }, [doing]);
  const decreaseIndex = useCallback(() => {
    if (doing) return;
    setDoing(true);
    setIsRight(false);

    const point = Math.ceil(items.length / offset);

    setIndex(prev => (-1 >= prev - 1 ? point - 1 : prev - 1));
  }, [items, doing]);

  // 2022/03/06 - show movie model - by 1-blue
  const showModel = useCallback(
    (itemId: number, backdrop_path: string, title: string, media_type: string) => () => {
      if (pathname.includes("/search"))
        navigate(`${pathname}/${itemId}`, { state: { backdrop_path, title, identifier, media_type } });
      else
        navigate(`/${kinds}${pathname === "/" ? "" : "s"}/${itemId}`, { state: { backdrop_path, title, identifier } });
    },
    [pathname, identifier],
  );

  return (
    <Wrapper>
      <CarouselTitle>{title}</CarouselTitle>
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
          {items.slice(offset * index, offset * index + offset).map(item => (
            <Box
              key={item.id}
              variants={boxVariants}
              whileHover="hover"
              transition={{ type: "tween" }}
              onClick={showModel(item.id, item.backdrop_path, item.title || item.name, item.media_type)}
              layoutId={item.id + identifier}
            >
              <Image image={itemFormat({ path: item.backdrop_path, format: "w500" })} />
              <Info variants={infoVariants}>
                <h4 className="title">{item.title || item.name}</h4>
                <span className="release-date">🚀개봉일: {item.release_date || item.first_air_date}</span>
                <span className="vote-average">👍평점: {item.vote_average}</span>
              </Info>
            </Box>
          ))}
        </Row>
      </AnimatePresence>

      <NextButton
        type="button"
        onClick={increaseIndex}
        whileHover={{ fontSize: "50px", opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        👉
      </NextButton>
      <PrevButton
        type="button"
        onClick={decreaseIndex}
        whileHover={{ fontSize: "50px", opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        👈
      </PrevButton>
    </Wrapper>
  );
};

export default Carousel;
