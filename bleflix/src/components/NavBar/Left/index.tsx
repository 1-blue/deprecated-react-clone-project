import React from "react";
import { Link } from "react-router-dom";

// styled-component
import { Wrapper, Circle } from "./style";

// logo
import Logo from "@src/components/common/Icon/Logo";
import { useLocation } from "react-router-dom";

const Left = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <li>
        <Link to="/">
          <Logo />
        </Link>
      </li>
      <li>
        <Link to="/">홈{pathname === "/" && <Circle layoutId="circle" />}</Link>
      </li>
      <li>
        <Link to="/tvs">TV {pathname.includes("/tvs") && <Circle layoutId="circle" />}</Link>
      </li>
      <li>
        <Link to="/movies">영화 {pathname.includes("/movies") && <Circle layoutId="circle" />}</Link>
      </li>
      <li>
        <Link to="/search">검색 {pathname.includes("/search") && <Circle layoutId="circle" />}</Link>
      </li>
    </Wrapper>
  );
};

export default Left;
