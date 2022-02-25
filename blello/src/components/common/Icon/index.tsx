import React from "react";

// assets
import { Logo, Option, Trash } from "@src/assets/icon";

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
    case "option":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Option {...props} />
        </Wrapper>
      );
    case "trash":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Trash {...props} />
        </Wrapper>
      );

    default:
      return (
        <Wrapper>
          <Logo />
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
