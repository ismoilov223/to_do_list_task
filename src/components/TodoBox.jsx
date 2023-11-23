import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import TodosRow from "./component/TodosRow";
const TodoBox = () => {
  return (
    <>
      <div className="todo-cont w-full flex flex-col items-center gap-10 absolute z-1 top-12">
        <div className="title-box w-full flex justify-center">
          <img src="svg/Logo.svg" alt="" />
        </div>
        <div className="creator-box w-[80%] md:w-[43%] bg-white py-[18px] pl-5 rounded-[5px]">
          <input
            type="text"
            placeholder="Create a new todo…"
            className="w-full outline-none"
          />
        </div>
        <div className="todos-box w-[80%] md:w-[43%] bg-white rounded-[15px]">
          <TodosRow></TodosRow>
          <TodosRow></TodosRow>
          <TodosRow></TodosRow>
          <TodosRow></TodosRow>
          <TodosRow></TodosRow>
          <TodosRow></TodosRow>
          <TodosRow></TodosRow>
          <TodosRow></TodosRow>
        </div>
      </div>
    </>
  );
};

export default TodoBox;
