import React, { useEffect, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { Checkbox } from "@material-tailwind/react";

const TodosRow = ({ completed, task, toggleTask, removeTask }) => {
  // console.log(task.completed);

  return (
    <>
      {" "}
      <div className="row-box bg-transparent flex items-center justify-between px-5 border-b border-[#E3E4F1] gap-3">
        <div className="firs-cont-of-todos flex items-center gap-2 ">
          <div className="checkbox-box">
            <Checkbox
              className="rounded-[50%]"
              color="purple"
              onChange={() => toggleTask(task.id)}
              checked={task.completed}
            />
          </div>
          <div className="todo-text-box">
            <p className={"todo-text text-xs md:text-lg font-normal"}>
              {task.text}
            </p>
          </div>
        </div>
        <div className="crud-icons-box flex items-center gap-2">
          <button
            class="middle none text-[17px] md:text-[25px] center flex items-center justify-center rounded-lg p-3 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-dark="true"
          >
            <MdOutlineModeEdit />
          </button>
          <button
            class="middle none text-[17px] md:text-[25px] center flex items-center justify-center rounded-lg p-3 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-dark="true"
            onClick={() => removeTask(task.id)}
          >
            <IoCloseOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodosRow;
