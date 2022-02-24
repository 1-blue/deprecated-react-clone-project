import React from "react";

// component
import Spinner from "@src/components/common/Spinner";

// styled-component
import { Wrapper } from "./style";

interface IButton {
  type: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  $loading: boolean;

  $local?: boolean;
  $facebook?: boolean;
  $naver?: boolean;
  $kakao?: boolean;
}

const Button = ({ $loading, children, ...props }: IButton) => {
  return (
    <Wrapper {...props}>{$loading ? <Spinner $button /> : <span className="button-text">{children}</span>}</Wrapper>
  );
};

Button.defaultProps = {
  $loading: false,
  children: "Click Me",
};

export default Button;
