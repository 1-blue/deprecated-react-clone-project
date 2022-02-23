import React from "react";

// styled-component
import { Wrapper } from "./style";

interface IToDoTitleProps {
  title: string;
  subTitle: string;
}

const ToDoTitle = ({ title, subTitle }: IToDoTitleProps) => {
  return (
    <Wrapper>
      <h1 className="title">{title}</h1>
      <h3 className="sub-title">{subTitle}</h3>
    </Wrapper>
  );
};

export default ToDoTitle;
