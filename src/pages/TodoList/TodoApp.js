import React from "react";
import TodoList from "./components/TodoList";
import "./todoApp.scss"

const TodoApp = () => {
  return (
    <div className="todoApp-wrap">
      <TodoList />
    </div>
  );
};

export default TodoApp;
