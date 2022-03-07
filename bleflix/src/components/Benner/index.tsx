import React from "react";
import { useRecoilValue } from "recoil";

// type
import { IItem } from "@src/types";

// item helper function
import { itemFormat } from "@src/utils";

// styled-components
import { Wrapper, Title, Overview } from "./style";

// component
import Loader from "@src/components/common/Loader";

// atom
import { themeState } from "@src/atoms";

const Benner = ({ item }: { item: IItem | null }) => {
  const isDark = useRecoilValue(themeState);
  if (!item) return <Loader />;

  return (
    <Wrapper image={itemFormat({ path: item.backdrop_path })} isDark={isDark}>
      <Title>{item.title || item.name}</Title>
      <Overview>{item.overview}</Overview>
    </Wrapper>
  );
};

export default Benner;
