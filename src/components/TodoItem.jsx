import React, { useContext } from "react";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { TodoContext } from "../TodoContext";

function TodoItem({ todo }) {
  const { setToEdit, deleteTodo } = useContext(TodoContext);
  return (
    <div className="todo">
      <div className="text" style={{ flex: "1" }}>
        {todo.text}
      </div>
      <div className="btns">
        <button
          className="updateBtn btn"
          onClick={() => {
            setToEdit(todo);
          }}
        >
          <FaRegEdit />
        </button>
        <button
          className="deleteBtn btn"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
