import React from "react";

// type
import { movie } from "@src/types";

// movie helper function
import { movieFormat } from "@src/utils";

// styled-components
import { Wrapper, Title, Overview } from "./style";

const Benner = ({ movie }: { movie: movie }) => {
  return (
    <Wrapper image={movieFormat({ path: movie.backdrop_path })}>
      <Title>{movie.title}</Title>
      <Overview>{movie.overview}</Overview>
    </Wrapper>
  );
};

export default Benner;
