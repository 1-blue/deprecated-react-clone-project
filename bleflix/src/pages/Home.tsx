import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

// types
import { ITEM_KINDS } from "@src/types";

// atom
import { mainMovieState } from "@src/atoms";

// components
import Benner from "@src/components/Benner";
import Modal from "@src/components/Modal";
import TvCarousels from "@src/components/TvCarousels";
import MovieCarousels from "@src/components/MovieCarousels";

const Home = () => {
  const { movieId, tvId } = useParams<{ movieId: string; tvId: string }>();
  const mainMovie = useRecoilValue(mainMovieState);

  return (
    <>
      {/* 1위 ~ 20위의 인기영화중 랜덤으로 메인화면으로 보여줌 */}
      <Benner item={mainMovie} />

      <MovieCarousels />

      <TvCarousels />

      {/* 영화 or TV 상세 모달 */}
      {movieId ? <Modal kinds={ITEM_KINDS.MOVIE} itemId={movieId} /> : null}
      {tvId ? <Modal kinds={ITEM_KINDS.TV} itemId={tvId} /> : null}
    </>
  );
};

export default Home;
