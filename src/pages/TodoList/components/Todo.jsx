import React, { useState } from "react";
import TodoForm from "./TodoForm";
// import { RiCloseCircleLine } from "react-icons/ri";
// import { TiEdit } from "react-icons/ti";
import { BiCheck, BiTrashAlt,BiEditAlt } from "react-icons/bi";

const Todo = ({ todos, completeTodo, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitEdit = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "hideDone" : "todo"} key={index}>
      <div className="text-wrap" key={todo.id}>
        {todo.text}
      </div>
      <div className="btn-wrap">
        <button className="icons" onClick={() => completeTodo(todo.id)}>
          <BiCheck/>
        </button>
        <button className="icons" onClick={() => removeTodo(todo.id)}>
          <BiTrashAlt className="delete-icon" />
        </button>
        <button
          className="icons"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          <BiEditAlt className="edit-icon" />
        </button>
      </div>
    </div>
  ));
};

export default Todo;
