import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

// fetcher
import { moviesFetcher, tvsFetcher } from "@src/api";

// types
import { IItemsResult, ITEM_KINDS, MOVIE_KINDS, TV_KIND } from "@src/types";

// common-component
import Loader from "@src/components/common/Loader";

// components
import Benner from "@src/components/Benner";
import Carousel from "@src/components/Carousel";
import Model from "@src/components/Modal";

const randomNumber = Math.floor(Math.random() * 20);

const Home = () => {
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

  // 인기 tv프로그램
  const { data: popularTvs, isLoading: popularTvsLoading } = useQuery<IItemsResult>(["tvs", "popular"], () =>
    tvsFetcher({ kinds: TV_KIND.POPULAR }),
  );
  // 최신 tv프로그램
  const { data: topRatedTvs, isLoading: topRatedTvsLoading } = useQuery<IItemsResult>(["tvs", "top_rated"], () =>
    tvsFetcher({ kinds: TV_KIND.TOP_RATED }),
  );
  // 현재 진행중인 tv프로그램
  const { data: onTheAirTvs, isLoading: onTheAirTvsLoading } = useQuery<IItemsResult>(["tvs", "onTheAir"], () =>
    tvsFetcher({ kinds: TV_KIND.ON_THE_AIR }),
  );
  // 오늘 방영하는 tv프로그램
  const { data: airingTodayTvs, isLoading: airingTodayTvsLoading } = useQuery<IItemsResult>(
    ["tvs", "airingToday"],
    () => tvsFetcher({ kinds: TV_KIND.AIRING_TODAY }),
  );

  const { movieId, tvId } = useParams<{ movieId: string; tvId: string }>();

  // 2022/03/06 - 모달창 오픈 시 외부영역 스크롤 끄기 - by 1-blue
  useEffect(() => {
    if (movieId || tvId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [movieId, tvId]);

  // 영화 패치
  if (
    popularMoviesLoading ||
    !popularMovies ||
    nowPlayingMoviesLoading ||
    !nowPlayingMovies ||
    upcomingMoviesLoading ||
    !upcomingMovies
  )
    return <Loader />;

  // tv프로그램 패치
  if (
    popularTvsLoading ||
    !popularTvs ||
    topRatedTvsLoading ||
    !topRatedTvs ||
    onTheAirTvsLoading ||
    !onTheAirTvs ||
    airingTodayTvsLoading ||
    !airingTodayTvs
  )
    return <Loader />;

  return (
    <>
      {/* 1위 ~ 10위중 랜덤으로 메인화면으로 보여줌 */}
      <Benner movie={popularMovies?.results[randomNumber]} />

      {/* 인기 영화 슬라이드 */}
      <Carousel
        kinds={ITEM_KINDS.MOVIE}
        title="인기 영화 TOP 20"
        items={[...popularMovies?.results.slice(0, randomNumber), ...popularMovies?.results.slice(randomNumber + 1)]}
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

      {/* 인기 Tv 프로그램 슬라이드 */}
      <Carousel
        kinds={ITEM_KINDS.TV}
        title="인기 TV 프로그램 TOP 20"
        items={popularTvs.results.filter(result => result.backdrop_path !== null)}
      />

      {/* 최신 Tv 프로그램 슬라이드 */}
      <Carousel
        kinds={ITEM_KINDS.TV}
        title="최신 TV 프로그램 TOP 20"
        items={topRatedTvs.results.filter(result => result.backdrop_path !== null)}
      />

      {/* 현재 상영중인 Tv 프로그램 슬라이드 */}
      <Carousel
        kinds={ITEM_KINDS.TV}
        title="현재 상영중인 TV 프로그램 TOP 20"
        items={onTheAirTvs.results.filter(result => result.backdrop_path !== null)}
      />

      {/* 오늘 방송하는 Tv 프로그램 슬라이드 */}
      <Carousel
        kinds={ITEM_KINDS.TV}
        title="오늘 방송하는 TV 프로그램 TOP 20"
        items={airingTodayTvs.results.filter(result => result.backdrop_path !== null)}
      />

      {/* 상세 영화 모달 */}
      {movieId ? <Model kinds={ITEM_KINDS.MOVIE} itemId={movieId} /> : null}
      {tvId ? <Model kinds={ITEM_KINDS.TV} itemId={tvId} /> : null}
    </>
  );
};

export default Home;
