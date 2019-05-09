import React from "react";

import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form";

const TodoList = ({ todos, receiveTodo, removeTodo}) => {
  const todoListItems = todos.map( (todo, idx) => <TodoListItem key={idx} todo={todo} removeTodo={removeTodo} /> )
  return (
    <ul>
      {todoListItems}
      <TodoForm receiveTodo={receiveTodo} />
    </ul>
  );
};

export default TodoList;