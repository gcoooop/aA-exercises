import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions"

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODOS:
      const newTodos = {};
      action.todos.forEach( todo => {
        newTodos[todo.id] = todo;
      });
      return newTodos;


    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return Object.assign({}, state, newTodo);


    case REMOVE_TODO:
      const currentTodos = Object.assign({}, state)
      delete currentTodos[action.todo.id];
      return currentTodos;

    default:
      return state;
  }
};