import React, { useState } from "react";

import TodosRow from "./component/TodosRow";
const TodoBox = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleInputChange = (event) => {
    if (event.key === "Enter" || event.key === "enter") {
      addTask();
      event.target.value = null;
    }
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
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
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleInputChange}
          />
        </div>
        <div className="todos-box mb-[3%] w-[80%] md:w-[43%] bg-white rounded-[15px]">
          {tasks.map((task) => (
            <TodosRow
              key={task.id}
              complete={task.completed}
              task={task}
              toggleTask={toggleTask}
              removeTask={removeTask}
            ></TodosRow>
          ))}

          <div className="todo-bottom-box flex items-center justify-center px-8 py-4">
            <div className="text-box flex items-center gap-[19px]">
              <button className="first-text text-[#3A7CFD] text-sm font-bold hover:text-[#494C6B] transition-colors">
                All
              </button>
              <button className="first-text text-[#3A7CFD] text-sm font-bold hover:text-[#494C6B] transition-colors">
                Active
              </button>
              <button className="first-text text-[#3A7CFD] text-sm font-bold hover:text-[#494C6B] transition-colors">
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoBox;
