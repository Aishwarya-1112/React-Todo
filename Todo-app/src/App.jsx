import React from "react";
import Todo from "./components/Todo";
import { TodoProvider } from "./TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
};

export default App;
