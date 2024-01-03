import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { FiCheckSquare } from "react-icons/fi";
import { FcCancel } from "react-icons/fc";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  console.log("TodoList", todos);

  const addTodo = (todo) => {
    if (!todo.text.trim()) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(...todos);
  };

  const editTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const removeComplete = () => {
    const completeList = [...todos].filter((item) => item.isComplete === false);
    setTodos(completeList);
  };

  // const filterTodo = [];
  // todos.forEach((list) => {
  //   list.isComplete && filterTodo.push({ text: list.text });
  // });

  const filterTodoo = todos.filter((item) => item.isComplete);

  return (
    <div className="todolist-wrap">
      <div className="todolist">
        <h1 className="todo-title">My Todo List</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      </div>
      <div className="todolist-done">
        <div className="todolist-doneWrap">
          <h1 className="todo-title">Completed Task</h1>
          {filterTodoo.length ? (
            filterTodoo.map((todo, index) => (
              <div className="done-list" key={index}>
                <div className="done-icon">
                  <FiCheckSquare />
                </div>
                <div className="done-txt">{todo.text}</div>
                <button
                  className="cancle-icon"
                  onClick={() => completeTodo(todo.id)}
                >
                  <FcCancel />
                </button>
              </div>
            ))
          ) : (
            <div className="uncomplete-msg">please complete your task</div>
          )}
        </div>
        <div className='todolist-btnWrap'>
          {filterTodoo.length ? (
            <button className="btn-remove" onClick={() => removeComplete()}>
              Remove All Completed Task
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
