import React from "react";

// styled-components
import { Wrapper } from "./style";

interface IProps {
  children: React.ReactNode;
}

const Title = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Title;
