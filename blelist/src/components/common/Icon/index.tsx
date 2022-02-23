import React from "react";

// assets
import { Logo, Eye, StrokeEye, Check, Trash } from "@src/assets/icon";

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
    case "eye":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Eye {...props} />
        </Wrapper>
      );
    case "strokeEye":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <StrokeEye {...props} />
        </Wrapper>
      );
    case "check":
      return (
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Check {...props} />
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
        <Wrapper hoverFill={hoverFill} animation={animation}>
          <Logo {...props} />
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
