import { connect } from "react-redux";
import TodoList from "./todos_list";

const mapStateToProps = state => {
  return {
    todos: allTodos(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveTodo: (todo) => dispatch( receiveTodo(todo) ),
    removeTodo: (todo) => dispatch( removeTodo(todo) )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);