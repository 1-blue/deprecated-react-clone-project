import React, { useEffect, useState } from "react";
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
  const [backgroundPath, setBackgroundPath] = useState<string>("");

  // 2022/03/08 - offset 지정 - by 1-blue
  useEffect(() => {
    const changeBackgroundPath = () => {
      if (window.innerWidth <= 768) setBackgroundPath(item?.poster_path || "");
      else setBackgroundPath(item?.backdrop_path || "");
    };
    changeBackgroundPath();

    window.addEventListener("resize", changeBackgroundPath);

    return () => window.removeEventListener("resize", changeBackgroundPath);
  }, [item]);

  if (!item) return <Loader />;

  return (
    <Wrapper image={itemFormat({ path: backgroundPath })} isDark={isDark}>
      <Title>{item.title || item.name}</Title>
      <Overview>{item.overview}</Overview>
    </Wrapper>
  );
};

export default Benner;
