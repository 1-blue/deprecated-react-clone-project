import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.section)`
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.bgColor};
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MovieImage = styled(motion.figure)<{ image: string }>`
  height: 50vh;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ image }) => image});
  background-color: black;
`;

export const MovieTitle = styled.h2`
  padding: 0.6em 1em 0;
`;

export const LayoutFlex = styled.div`
  display: flex;
  padding: 0 1em 1em 1em;
  color: ${({ theme }) => theme.textColor};
`;

export const MovieDescription = styled.p`
  flex: 7 0 0;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.6em;
`;

export const MovieSubDescription = styled.ul`
  flex: 3 0 0;
  padding: 0.4em;

  & li {
    margin-bottom: 0.8em;

    & .movie-sub-font-size {
      font-size: 0.9rem;
    }

    & .movie-sub-title {
      color: #777777;
    }

    & .movie-genre {
      &::after {
        content: ", ";
      }
      &:last-child::after {
        content: "";
      }
    }
  }
`;
