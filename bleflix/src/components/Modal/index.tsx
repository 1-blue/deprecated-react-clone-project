import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

// util
import { itemFormat } from "@src/utils";

// fetcher
import { movieFetcher, tvFetcher } from "@src/api";

// styled-components
import { Wrapper, Overlay, MovieImage, MovieTitle, MovieDescription, LayoutFlex, MovieSubDescription } from "./style";

// type
import { ITEM_KINDS, IDetailMovie, IDetailTv } from "@src/types";

interface IModalProps {
  kinds: ITEM_KINDS;
  itemId: string;
}

interface ILocationProps {
  backdrop_path: string;
  title: string;
  identifier: string;
}

const Modal = ({ kinds, itemId }: IModalProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ILocationProps;
  const { data } = useQuery<{ poster_path: string; overview: string }>(["movie", itemId], () => {
    switch (kinds) {
      case ITEM_KINDS.MOVIE:
        return movieFetcher({ movieId: itemId });
      case ITEM_KINDS.TV:
        return tvFetcher({ tvId: itemId });

      default:
        return movieFetcher({ movieId: itemId });
    }
  });

  // 2022/03/06 - 입력 조건에 따라 상세 정보 컴포넌트 반환 - by 1-blue
  const subDescription = useCallback(() => {
    switch (kinds) {
      case ITEM_KINDS.MOVIE:
        const movie = data as IDetailMovie;
        return (
          <>
            <li>
              <span className="movie-sub-title">장르: </span>
              {movie?.genres.map(genre => (
                <span key={genre.id} className="movie-genre movie-sub-font-size">
                  {genre.name}
                </span>
              ))}
            </li>
            <li>
              <span className="movie-sub-title">런타임: </span>
              <span className="movie-sub-font-size">{movie?.runtime}분</span>
            </li>
            <li>
              <span className="movie-sub-title">개봉일: </span>
              <span className="movie-sub-font-size">{movie?.release_date}</span>
            </li>
            <li>
              <span className="movie-sub-title">추천수: </span>
              <span className="movie-sub-font-size">{movie?.vote_count}</span>
            </li>
          </>
        );

      case ITEM_KINDS.TV:
        const tv = data as IDetailTv;
        return (
          <>
            <li>
              <span className="movie-sub-title">장르: </span>
              {tv?.genres.map(genre => (
                <span key={genre.id} className="movie-genre">
                  {genre.name}
                </span>
              ))}
            </li>
            <li>
              <span className="movie-sub-title">런타임: </span>
              {tv?.episode_run_time}분
            </li>
            <li>
              <span className="movie-sub-title">개봉일: </span>
              {tv?.first_air_date}
            </li>
            <li>
              <span className="movie-sub-title">추천수: </span>
              {tv?.vote_count}
            </li>
          </>
        );

      default:
        break;
    }
  }, [kinds, data]);

  // 2022/03/06 - back to the home - by 1-blue
  const closeModal = useCallback(() => navigate("/"), []);

  return (
    <>
      <Overlay onClick={closeModal} />
      <Wrapper layoutId={itemId + state.identifier}>
        <MovieImage image={itemFormat({ path: data?.poster_path || state.backdrop_path })} />
        <MovieTitle>{state.title}</MovieTitle>
        <LayoutFlex>
          <MovieDescription>{data?.overview}</MovieDescription>
          <MovieSubDescription>{subDescription()}</MovieSubDescription>
        </LayoutFlex>
      </Wrapper>
    </>
  );
};

export default Modal;
