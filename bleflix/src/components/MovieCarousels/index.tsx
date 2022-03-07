import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";

// fetcher
import { moviesFetcher } from "@src/api";

// type
import { IItemsResult, ITEM_KINDS, MOVIE_KINDS } from "@src/types";

// atom
import { mainMovieState, randomNumberState } from "@src/atoms";

// component
import Carousel from "@src/components/Carousel";
import Loader from "@src/components/common/Loader";

const MovieCarousels = () => {
  const randomNumber = useRecoilValue(randomNumberState);
  const setMainMovie = useSetRecoilState(mainMovieState);

  // 인기 영화
  const { data: popularMovies, isLoading: popularMoviesLoading } = useQuery<IItemsResult>(["movies", "popular"], () =>
    moviesFetcher({ kinds: MOVIE_KINDS.POPULAR }),
  );
  // 현재 상영중인 영화
  const { data: nowPlayingMovies, isLoading: nowPlayingMoviesLoading } = useQuery<IItemsResult>(
    ["movies", "nowPlaying"],
    () => moviesFetcher({ kinds: MOVIE_KINDS.NOW_PLAYING }),
  );
  // 상영 예정 영화
  const { data: upcomingMovies, isLoading: upcomingMoviesLoading } = useQuery<IItemsResult>(
    ["movies", "upcoming"],
    () => moviesFetcher({ kinds: MOVIE_KINDS.UPCOMING }),
  );
  // 상영 예정 영화
  const { data: topRatedMovies, isLoading: topRatedMoviesLoading } = useQuery<IItemsResult>(
    ["movies", "topRated"],
    () => moviesFetcher({ kinds: MOVIE_KINDS.TOP_RATED }),
  );

  // 2022/03/07 - 메인 영화 지정 - by 1-blue
  useEffect(() => {
    setMainMovie(popularMovies ? popularMovies.results[randomNumber] : null);
  }, [popularMovies, randomNumber]);

  // 영화 패치
  if (
    popularMoviesLoading ||
    !popularMovies ||
    nowPlayingMoviesLoading ||
    !nowPlayingMovies ||
    upcomingMoviesLoading ||
    !upcomingMovies ||
    topRatedMoviesLoading ||
    !topRatedMovies
  )
    return <Loader />;

  return (
    <>
      {/* 인기 영화 슬라이드 */}
      <Carousel
        kinds={ITEM_KINDS.MOVIE}
        title="인기 영화 TOP 20"
        items={[...popularMovies?.results.slice(0, randomNumber), ...popularMovies?.results.slice(randomNumber + 1)]}
      />

      {/* 최고 평점 영화 슬라이드 */}
      <Carousel
        kinds={ITEM_KINDS.MOVIE}
        title="최고 평점 영화 TOP 20"
        items={topRatedMovies.results.filter(result => result.backdrop_path !== null)}
      />

      {/* 상영중인 영화 슬라이드 */}
      <Carousel
        kinds={ITEM_KINDS.MOVIE}
        title="현재 상영중인 영화 TOP 20"
        items={nowPlayingMovies.results.filter(result => result.backdrop_path !== null)}
      />

      {/* 개봉예정 영화 슬라이드 */}
      <Carousel
        kinds={ITEM_KINDS.MOVIE}
        title="개봉예정 영화 TOP 20"
        items={upcomingMovies.results.filter(result => result.backdrop_path !== null)}
      />
    </>
  );
};

export default MovieCarousels;
