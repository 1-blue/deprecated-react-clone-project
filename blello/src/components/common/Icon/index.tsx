import React from "react";

// assets
import { Logo, Home, FillHome, Heart, FillHeart, Comment, FillComment, Avatar, Option, Search } from "@src/assets/icon";

// styled-component
import { Wrapper } from "./style";

interface IIcon {
  width?: number;
  height?: number;
  fill?: string;
  onClick?: Function;
  shape: string;
  hoverFill?: string;
  animation?: string;
}

const Icon = ({ shape, hoverFill, animation, ...props }: IIcon) => {
  switch (shape) {
    case "logo":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Logo {...props} />
        </Wrapper>
      );
    case "home":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Home {...props} />
        </Wrapper>
      );
    case "fillHome":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <FillHome {...props} />
        </Wrapper>
      );
    case "heart":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Heart {...props} />
        </Wrapper>
      );
    case "fillHeart":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <FillHeart {...props} />
        </Wrapper>
      );
    case "comment":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Comment {...props} />
        </Wrapper>
      );
    case "fillComment":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <FillComment {...props} />
        </Wrapper>
      );
    case "avatar":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Avatar {...props} />
        </Wrapper>
      );
    case "option":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Option {...props} />
        </Wrapper>
      );
    case "search":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Search {...props} />
        </Wrapper>
      );

    default:
      return (
        <Wrapper>
          <Avatar />
        </Wrapper>
      );
  }
};

Icon.defaultProps = {
  shape: "avatar",
  width: 24,
  height: 24,
  color: "black",
  onClick: null,
  hoverFill: null,
  animation: null,
};

export default Icon;
