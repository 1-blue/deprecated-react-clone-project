import React, { useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";
import { useRecoilValue } from "recoil";

// components
import Left from "./Left";
import Right from "./Right";

// atom
import { themeState } from "@src/atoms";

// styled-components
import { Wrapper } from "./style";

const navVariants = {
  initial: {
    backgroundColor: "transparent",
  },
  animate: ({ y: scrollY, isDark }: { y: number; isDark: boolean }) => ({
    backgroundColor: isDark
      ? scrollY > 40
        ? "rgba(36, 37, 38, 1)"
        : "rgba(36, 37, 38, 0)"
      : scrollY > 40
      ? "rgba(245, 246, 250, 1)"
      : "rgba(245, 246, 250, 0)",
    boxShadow: scrollY > 40 ? "0 0 16px black" : "0 0 0px black",
    transition: { duration: 0.6 },
  }),
};

const NavBar = () => {
  const isDark = useRecoilValue(themeState);
  const { scrollY } = useViewportScroll();
  const [y, setY] = useState<number>(0);

  // 2022/03/05 - 새로고침시 스크롤 위치 기억 - by 1-blue
  useEffect(() => setY(window.scrollY), [window.scrollY]);

  // 2022/03/05 - scrollY값 변화 이벤트 등록 - by 1-blue
  useEffect(() => scrollY.onChange(v => setY(v)), [scrollY]);

  return (
    <Wrapper custom={{ y, isDark }} variants={navVariants} initial="initial" animate="animate">
      <Left />
      <Right />
    </Wrapper>
  );
};

export default NavBar;
