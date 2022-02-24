import React from "react";
import styled, { css } from "styled-components";

interface IButtonWrapper {
  type: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  $local?: boolean;
  $facebook?: boolean;
  $naver?: boolean;
  $kakao?: boolean;
}

export const Wrapper = styled.button<IButtonWrapper>`
  position: relative;
  width: 60%;
  padding: 0.5rem;
  color: white;
  margin-bottom: 0.3rem;
  opacity: 0.9;
  background: #b667f1;

  &:hover {
    opacity: 1;
  }

  /* 일반 로그인 스타일 */
  ${({ $local }) =>
    $local &&
    css`
      background: var(--main-color);
    `}

  /* 페이스북 로그인 스타일 */
  ${({ $facebook }) =>
    $facebook &&
    css`
      background: var(--facebook-color);
    `}

  /* 네이버 로그인 스타일 */
  ${({ $naver }) =>
    $naver &&
    css`
      background: var(--naver-color);
    `}

  /* 카카오 로그인 스타일 */
  ${({ $kakao }) =>
    $kakao &&
    css`
      background-color: var(--kakao-color);
    `}
`;
