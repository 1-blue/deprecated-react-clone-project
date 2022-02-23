import { toDoInfoSelector } from "@src/atoms";
import React from "react";
import { useRecoilValue } from "recoil";

// stlyed-components
import { Wrapper } from "./style";

const ToDoSubTitle = () => {
  const toDoInfo = useRecoilValue(toDoInfoSelector);

  return <Wrapper>{toDoInfo}</Wrapper>;
};

export default ToDoSubTitle;
