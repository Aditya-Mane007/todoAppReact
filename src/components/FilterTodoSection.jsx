import React from "react";
import TodoItem from "../components/TodoItem";

function filterTodoSection({ filter }) {
  return (
    <>
      {filter.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default filterTodoSection;
