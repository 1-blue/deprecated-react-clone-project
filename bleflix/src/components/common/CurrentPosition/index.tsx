import React, { useState, useEffect, useCallback } from "react";

// styled-components
import { Wrapper } from "./style";

const CurrentPosition = () => {
  const [currentPositionY, setCurrentPositionY] = useState(0);

  // 현재 스크롤 Y값 %로 구하기
  const scrollEvent = useCallback(() => {
    setCurrentPositionY(
      window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight),
    );
  }, []);

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent]);

  return <Wrapper currentPositionY={currentPositionY} />;
};

export default CurrentPosition;
