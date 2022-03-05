import React from "react";
import { useQuery } from "react-query";

// fetcher
import { moviesFetcher } from "@src/api";

// types
import { IMoviesResult } from "@src/types";

// common-component
import Loader from "@src/components/common/Loader";

// components
import Benner from "@src/components/Benner";
import Carousel from "@src/components/Carousel";

const Home = () => {
  const { data, isLoading } = useQuery<IMoviesResult>(["movies", "nowPlaying"], () => moviesFetcher({}));
  const randomNumber = Math.floor(Math.random() * 20);

  if (isLoading || !data) return <Loader />;

  return (
    <>
      {/* 1위 ~ 10위중 랜덤으로 메인화면으로 보여줌 */}
      <Benner movie={data?.results[randomNumber]} />

      {/* 메인화면인 영화를 제외한 정보 넘겨줌 */}
      <Carousel movies={[...data?.results.slice(0, randomNumber), ...data?.results.slice(randomNumber + 1)]} />
    </>
  );
};

export default Home;
