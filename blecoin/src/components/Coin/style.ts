import styled from "styled-components";
import { Link } from "react-router-dom";

interface ICoinWrapper {
  $upperLimit: boolean;
}

export const Wrapper = styled(Link)<ICoinWrapper>`
  display: flex;
  align-items: center;

  padding: 0.6em 1.2em;
  margin-bottom: 1em;

  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  border-radius: 0.6em;

  transition: all 0.4s;

  &:hover {
    transform: translateY(-10px);
    background-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.textColor};
  }

  /* 코인의 대표 이미지 */
  & .coin-image {
    width: 40px;
    height: 40px;
    margin-right: 0.6em;
  }

  /* 코인 데이터들 */
  & .coin-data {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    /* 코인 이름 */
    & .coin-name {
      font-size: 1.2rem;
      font-weight: 600;
    }

    /* 코인 가격 */
    /* 코인 가격 변동률 ( 하루기준 ) */
    & .coin-price,
    .coin-change-rate {
      color: ${({ $upperLimit, theme }) => ($upperLimit ? theme.upperColor : theme.lowerColor)};
    }
  }
`;
