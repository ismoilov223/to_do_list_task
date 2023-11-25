import React, { useEffect, useState } from "react";

import TodosRow from "./component/TodosRow";
import { IoCloseOutline, IoSaveOutline } from "react-icons/io5";
const TodoBox = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [newTask, setNewTask] = useState("");
  const handleInputChange = (event) => {
    if (event.key === "Enter" || event.key === "enter") {
      addTask();
      event.target.value = null;
    }
  };

  const addTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
    console.log(newTask == ""?"null":"not null");
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const completed = () => {
    setTasks(tasks.map((task) => (true ? { ...task, completed: true } : task)));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const removecompleted = () => {
    setTasks(tasks.filter((task) => task.completed !== true));
  };
  const handleTextEdit = (id, value) => {
    setTasks(
      tasks.map((task) => (task.id == id ? { ...task, text: value } : task))
    );
  };
  return (
    <>
      <div className="todo-cont w-full flex flex-col items-center gap-10 absolute z-1 top-12">
        <div className="title-box w-full flex justify-center">
          <img src="svg/Logo.svg" alt="" />
        </div>
        <div className="creator-box w-[80%] md:w-[43%] bg-white py-[18px] pl-5 rounded-[5px] flex items-center pr-3">
          <input
            type="text"
            placeholder="Create a new todo…"
            className="w-full outline-none"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleInputChange}
          />
          <button
            class="middle none text-[17px] md:text-[25px] center flex items-center justify-center rounded-lg p-3 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-dark="true"
            onClick={() => addTask()}
          >
            <IoSaveOutline className="text-xl" />
          </button>
        </div>
        <div className="todos-box mb-[3%] w-[80%] md:w-[43%] bg-white rounded-[15px]">
          <div className="scrollbox">
            {tasks.map((task) => (
              <TodosRow
                key={task.id}
                completed={completed}
                task={task}
                toggleTask={toggleTask}
                removeTask={removeTask}
                handleTextEdit={handleTextEdit}
              ></TodosRow>
            ))}
          </div>

          <div className="todo-bottom-box flex items-center justify-between px-8 py-4">
            <div className="text-box flex items-center gap-[19px]">
              <button
                className="first-text text-[#3A7CFD] text-sm font-bold hover:text-[#494C6B] transition-colors"
                onClick={() => completed()}
              >
                Completed
              </button>
            </div>
            <button
              className="first-text text-[#9495A5] text-sm font-normal hover:text-[#494C6B] transition-colors"
              onClick={() => removecompleted()}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoBox;
