import React from "react";

// type
import { movie } from "@src/types";

// movie helper function
import { movieFormat } from "@src/utils";

// styled-components
import { Wrapper, Title, Overview } from "./style";

const Benner = ({ data }: { data: movie }) => {
  console.log(movieFormat({ path: data.backdrop_path }));

  return (
    <Wrapper movieImage={movieFormat({ path: data.backdrop_path })}>
      <Title>{data.title}</Title>
      <Overview>{data.overview}</Overview>
    </Wrapper>
  );
};

export default Benner;
