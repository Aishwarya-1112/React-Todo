import React, { createContext, useReducer, useContext } from "react";

// Initial State
const initialState = {
  tasks: [],
};

// Reducer Function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

// Create Context
const TodoContext = createContext();

// Provider Component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom Hook to Use Todo Context
export const useTodos = () => useContext(TodoContext);
