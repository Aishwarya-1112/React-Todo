import React, { useState } from "react";
import { useTodos } from "../TodoContext";
import "./App.css";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const { state, dispatch } = useTodos();

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
    }
  };

  const handleRemoveTask = (index) => {
    dispatch({ type: "REMOVE_TASK", payload: index });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border-1 border-blue-500 ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Todo App
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-300 ml-3"
          >
            Add Task
          </button>
        </div>

        <ul className="list-none p-0">
          {state.tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-2 px-4 bg-gray-50 border-b border-gray-200"
            >
              <span>{task}</span>
              <button
                onClick={() => handleRemoveTask(index)}
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
