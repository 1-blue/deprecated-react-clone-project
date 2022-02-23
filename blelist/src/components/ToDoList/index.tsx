import React from "react";
import { useRecoilValue } from "recoil";

// components
import ToDoTitle from "./ToDoTitle";
import ToDoCreator from "./ToDoCreator";
import ToDoOption from "./ToDoOption";
import ToDoSubTitle from "./ToDoSubTitle";
import ToDo from "./ToDo";

// atom
import { categoryToDoListState } from "@src/atoms";

const ToDoList = () => {
  const toDoList = useRecoilValue(categoryToDoListState);

  return (
    <>
      <ToDoTitle title="To Do List" subTitle="Built with React.js + Recoil + Typescript" />
      <ToDoCreator />
      <ToDoOption />
      <ToDoSubTitle />

      <ul style={{ width: "342px", display: "flex", flexFlow: "column nowrap", margin: "auto" }}>
        {toDoList.map(toDo => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
