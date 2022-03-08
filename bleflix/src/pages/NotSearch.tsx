import React, { useCallback } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

// hook
import useInput from "@src/hooks/useInput";

import HeadInfo from "@src/components/common/HeadInfo";

const Wrapper = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & h1 {
    margin-bottom: 1em;
  }

  & input[type="search"] {
    padding: 0.6em;
    font-size: 1.2rem;
    font-weight: bold;
    border: 0;
    border-radius: 0.2em;

    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
`;

const NotSearch = () => {
  const navigate = useNavigate();
  const { query } = useParams<{ query: string }>();
  const [text, onChangeText, setText] = useInput("");

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
    <>
      <HeadInfo title="bleflix - search" />

      {query ? (
        <Outlet />
      ) : (
        <>
          <Wrapper onSubmit={onSubmut}>
            <h1>작품 검색</h1>
            <input type="search" placeholder="제목을 입력해주세요" value={text} onChange={onChangeText} />
          </Wrapper>
        </>
      )}
    </>
  );
};

export default NotSearch;
