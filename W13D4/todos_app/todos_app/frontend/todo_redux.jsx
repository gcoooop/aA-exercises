import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import { receiveTodos, receiveTodo, removeTodo, fetchTodos, createTodo} from "./actions/todo_actions";
import Root from "./components/root";
import allTodos from "./reducers/selectors";
import { receiveErrors } from "./actions/error_actions";

const initialState = { todos: 
  {
    1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      done: false
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      done: true
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore(initialState);
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.createTodo = createTodo;
  window.fetchTodos = fetchTodos;
  // window.receiveErrors = receiveErrors
  window.allTodos = allTodos;
  
  const rootElement = document.querySelector("#content");
  ReactDOM.render(<Root store={store} />, rootElement);
})