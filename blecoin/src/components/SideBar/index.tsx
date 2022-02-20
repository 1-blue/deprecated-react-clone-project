import React, { useCallback, useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";

import { Wrapper } from "./style";

const SideBar = () => {
  const [isTop, setIsTop] = useState<boolean>(true);

  // 스크롤 맨위로 이동
  const moveScrollTop = useCallback(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), []);

  // 스크롤이 최상단이 아닐경우를 확인
  const rename = useCallback(() => setIsTop(document.documentElement.scrollTop === 0), []);

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", rename);

    return () => window.removeEventListener("scroll", rename);
  }, []);

  return (
    <Wrapper>
      {isTop || (
        <button type="button" className="side-button move-top-button" onClick={moveScrollTop}>
          👆
        </button>
      )}
      <button type="button" className="side-button">
        ☀️
      </button>
      {/* 🌙 */}
    </Wrapper>
  );
};

export default SideBar;
