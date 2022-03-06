import React from "react";

// type
import { IItem } from "@src/types";

// movie helper function
import { itemFormat } from "@src/utils";

// styled-components
import { Wrapper, Title, Overview } from "./style";

const Benner = ({ movie }: { movie: IItem }) => {
  return (
    <Wrapper image={itemFormat({ path: movie.backdrop_path })}>
      <Title>{movie.title}</Title>
      <Overview>{movie.overview}</Overview>
    </Wrapper>
  );
};

export default Benner;
