const allTodos = (state) => {
  return Object.keys(state.todos).map( todoID => state.todos[todoID] );
}

export default allTodos;