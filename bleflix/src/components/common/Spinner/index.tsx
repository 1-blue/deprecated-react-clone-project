import React from "react";

// styled-component
import { Wrapper } from "./style";

interface ISpinnerProps {
  $button?: boolean;
}

const Spinner = (props: ISpinnerProps) => {
  return <Wrapper {...props} />;
};

export default Spinner;
