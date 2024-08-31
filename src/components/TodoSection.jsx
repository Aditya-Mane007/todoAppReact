import React, { memo, useContext } from "react";
import TodoItem from "../components/TodoItem";
import { TodoContext } from "../TodoContext";

function TodoSection() {
  const { todos, filterTodos } = useContext(TodoContext);
  const todosToBePassed = filterTodos.length > 0 ? filterTodos : todos;
  return (
    <>
      {todosToBePassed.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          // deleteTodo={deleteTodo}
          // setToEdit={setToEdit}
        />
      ))}
    </>
  );
}

export default memo(TodoSection);
