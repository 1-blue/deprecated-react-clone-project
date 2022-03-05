import React, { useCallback, useRef, useState } from "react";

// icon
import SearchIcon from "@src/components/common/Icon/Search";

// styled-components
import { Wrapper, SearchInput } from "./style";

const Right = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // 2022/03/05 - 검색창 토글 - by 1-blue
  const toggleSearchInput = useCallback(
    () =>
      setSearchOpen(prev => {
        if (!prev) searchRef.current?.focus();
        return !prev;
      }),
    [searchRef],
  );

  return (
    <Wrapper>
      <li>
        <SearchIcon searchOpen={searchOpen} onClick={toggleSearchInput} />
        <SearchInput
          ref={searchRef}
          type="search"
          placeholder="제목, 사람, 장르"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: searchOpen ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </li>
      <li>알림</li>
      <li>내 정보</li>
      <li>
        <a href="https://github.com/1-blue" target="_blank">
          <b>GitHub</b>
        </a>
      </li>
    </Wrapper>
  );
};

export default Right;
