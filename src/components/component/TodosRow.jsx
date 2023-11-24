import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { Checkbox } from "@material-tailwind/react";

const TodosRow = ({complete,task,toggleTask,removeTask}) => {
  return (
    <>
      {" "}
      <div className="row-box bg-transparent flex items-center justify-between px-5 border-b border-[#E3E4F1] gap-3">
        <div className="firs-cont-of-todos flex items-center gap-2 ">
          <div className="checkbox-box">
            <Checkbox className="rounded-[50%]" color="purple" defaultCheck />
          </div>
          <div className="todo-text-box">
            <p className="text-[#494C6B] text-xs md:text-lg font-normal ">
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
