import { todoReducer } from "../todoReducer";
import React, { useEffect, useReducer } from "react";

const initialState = [];

const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "add todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "remove todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "toggle todo",
      payload: id,
    });
  };

const todosCount = todos.length

//   Para saber el numero de tareas pendientes
  const pendingTodosCount = todos.filter(todo => !todo.done).length

  return {
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todos,
    pendingTodosCount,
    todosCount
  };
};

export default useTodos;
