import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    margin-right: 1em;

    &:first-child {
      position: relative;
      display: flex;
      align-items: center;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const SearchInput = styled(motion.input)`
  font-size: 0.9rem;
  padding: 0.5em;
  padding-left: 36px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.textColor};

  transform-origin: right center;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    cursor: pointer;
  }
`;
