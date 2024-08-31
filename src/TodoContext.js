import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [isEditMode, setEditMode] = useState(false);
  const [toBeEditId, setToBeEditId] = useState(0);

  const getTodos = async () => {
    const res = localStorage.getItem("Todos");

    const data = JSON.parse(res);

    setTodos(data);
  };

  const setToEdit = (todoObject) => {
    const { id, text } = todoObject;

    setToBeEditId(id);
    setEditMode(!isEditMode);

    setTodoText(text);
  };

  const deleteTodo =  (todoId) => {
    const res = JSON.parse(localStorage.getItem("Todos"));

    const todos = [...res];

    const newTodos = todos.filter((todo) => todo.id !== todoId);

    localStorage.setItem("Todos", JSON.stringify(newTodos));

    getTodos();
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        filterTodos,
        setFilterTodos,
        todoText,
        setTodoText,
        setEditMode,
        isEditMode,
        setToEdit,
        toBeEditId,
        setToBeEditId,
        deleteTodo,
        getTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
