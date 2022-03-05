import React from "react";
import { useQuery } from "react-query";

// fetcher
import { moviesFetcher } from "@src/api";

// types
import { IMoviesResult } from "@src/types";

// components
import Benner from "@src/components/Benner";
import Loader from "@src/components/common/Loader";

const Home = () => {
  const { data, isLoading } = useQuery<IMoviesResult>(["movies", "nowPlaying"], () => moviesFetcher({}));

  if (isLoading || !data) return <Loader />;

  return (
    <>
      {/* 1위 ~ 10위중 랜덤으로 메인화면으로 보여줌 */}
      <Benner data={data?.results[Math.floor(Math.random() * 10)]} />
    </>
  );
};

export default Home;
