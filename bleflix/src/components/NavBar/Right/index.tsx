import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// icon
import SearchIcon from "@src/components/common/Icon/Search";

// styled-components
import { Wrapper, SearchInput } from "./style";

// hook
import useInput from "@src/hooks/useInput";

const Right = () => {
  const navigate = useNavigate();
  const [text, onChangeText, setText] = useInput("");
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

  // 2022/03/07 - 검색 - by 1-blue
  const onSubmut = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (text.length === 0) return alert("검색어를 입력해주세요!");

      // encodeURI를 내부적으로 처리해 주는 것 같음
      navigate(`/search/${text}`);

      setText("");
    },
    [text],
  );

  return (
    <Wrapper>
      <li>
        <form onSubmit={onSubmut}>
          <SearchIcon searchOpen={searchOpen} onClick={toggleSearchInput} />
          <SearchInput
            ref={searchRef}
            type="search"
            placeholder="제목 입력"
            value={text}
            onChange={onChangeText}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: searchOpen ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </form>
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
