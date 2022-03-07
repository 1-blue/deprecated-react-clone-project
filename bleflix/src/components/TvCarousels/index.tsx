import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";

// common-component
import Loader from "@src/components/common/Loader";

// components
import Carousel from "@src/components/Carousel";

// fetchers
import { tvsFetcher } from "@src/api";

// type
import { IItemsResult, ITEM_KINDS, TV_KIND } from "@src/types";

// atom
import { mainTvState, randomNumberState } from "@src/atoms";

const TvCarousels = () => {
  const randomNumber = useRecoilValue(randomNumberState);
  const setMainTv = useSetRecoilState(mainTvState);

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

  // 2022/03/07 - 메인 영화 지정 - by 1-blue
  useEffect(() => {
    setMainTv(popularTvs ? popularTvs.results[randomNumber] : null);
  }, [popularTvs, randomNumber]);

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
    </>
  );
};

export default TvCarousels;
