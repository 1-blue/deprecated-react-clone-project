import React, { useCallback, useEffect, useState } from "react";

// styled-components
import { Wrapper } from "./style";

const SideBar = () => {
  const [isTop, setIsTop] = useState<boolean>(true);

  // 스크롤 맨위로 이동
  const moveScrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  // 스크롤이 최상단이 아닐경우를 확인
  const isSrcollTop = useCallback(() => setIsTop(document.documentElement.scrollTop === 0), []);

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", isSrcollTop);

    return () => window.removeEventListener("scroll", isSrcollTop);
  }, []);

  return (
    <Wrapper>
      {isTop || (
        <button type="button" className="side-button move-top-button" onClick={moveScrollTop}>
          👆
        </button>
      )}
      <button type="button" className="side-button">
        {true ? "☀️" : "🌙"}
      </button>
    </Wrapper>
  );
};

export default SideBar;
