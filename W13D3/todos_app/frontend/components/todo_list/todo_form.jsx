import React from "react";

import uniqueId from "../../util/unique_id";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" , title: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputs = this.updateInputs.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const newTodo = { id: uniqueId(), title: this.state.title };
    this.props.receiveTodo(newTodo)

    this.setState( {id: "", title: ""} )
  }

  updateInputs(field) {
    return event => {
      this.setState( { [field]: event.currentTarget.value } )
    }
  }

  render() {
    return (
      <form>
        <label>
          Title
          <input className="todo-title" type="text"  placeholder="Todo Title" value={this.state.title} onChange={this.updateInputs("title")}/>
        </label>

        <button onClick={this.handleSubmit}>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;