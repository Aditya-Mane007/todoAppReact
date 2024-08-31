import React, { useEffect, useState, useContext } from "react";
import TodoSection from "./TodoSection";
import FilterTodoSection from "./FilterTodoSection";
import { TodoContext } from "../TodoContext";

function Main() {
  !localStorage.getItem("Todos") &&
    localStorage.setItem("Todos", JSON.stringify([]));

  const {
    todos,
    getTodos,
    todoText,
    setTodoText,
    setEditMode,
    toBeEditId,
    isEditMode,
  } = useContext(TodoContext);

  const [filterText, setFilterText] = useState("");

  const chnageHandler = (e) => {
    setTodoText(e.target.value);
  };

  const filterHandler = (e) => {
    setFilterText(e.target.value);
  };

  const filter = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filterText.toLowerCase())
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const message = document.querySelector(".message");
    if (!todoText) {
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 1000);
      return;
    }

    if (!isEditMode) {
      addTodo(todoText);
    } else {
      editTodo(toBeEditId, todoText);
      setEditMode(false);
    }
    setTodoText("");
  };

  const addTodo = (todoText) => {
    const todo = {
      id: randomId(),
      text: todoText,
    };

    const res = JSON.parse(localStorage.getItem("Todos"));

    const newTodos = res.length < 0 ? [] : [...res];

    newTodos.push(todo);

    localStorage.setItem("Todos", JSON.stringify(newTodos));

    getTodos();
  };

  const randomId = () => {
    return Math.floor(Math.random() * 999999999);
  };

  const editTodo = (todoId, todoText) => {
    const res = JSON.parse(localStorage.getItem("Todos"));

    for (let i = 0; i < res.length; i++) {
      if (res[i].id === todoId) {
        res[i].text = todoText;
      }
    }
    localStorage.setItem("Todos", JSON.stringify(res));
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <div className="formDiv">
        <form onSubmit={submitHandler}>
          <div className="inputDiv">
            <input
              type="text"
              placeholder="e.g. groceries shoping..."
              value={todoText}
              onChange={chnageHandler}
            />
            <div className="message">Please Enter Todo</div>
          </div>

          <button
            type="submit"
            className={`btn ${isEditMode ? "updateSubmitBtn" : "addTodoBtn"}`}
          >
            {!isEditMode ? "Add Todo" : "Update Todo"}
          </button>
        </form>
        {todos.length > 0 && (
          <div className="filterDiv">
            <div className="inputDiv">
              <input
                type="text"
                placeholder="Filter todo..."
                onChange={filterHandler}
              />
            </div>
          </div>
        )}
      </div>
      <div className="todoSection">
        {filter ? (
          filter.length > 0 ? (
            <FilterTodoSection filter={filter} />
          ) : (
            <>
              <h3>No Todos...</h3>
            </>
          )
        ) : (
          <>
            {todos && todos.length > 0 ? (
              <TodoSection />
            ) : (
              <>
                <h3>No Todos...</h3>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Main;
