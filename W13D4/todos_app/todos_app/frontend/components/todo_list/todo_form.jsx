import React from "react";

import uniqueId from "../../util/unique_id";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: "" , title: "", body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputs = this.updateInputs.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const newTodo = { id: uniqueId(), title: this.state.title, body: this.state.body, done: this.state.done };
    this.props.createTodo({ todo: newTodo }).then(
      () => this.setState( {id: "", title: "", body: ""} )
    )
  }

  updateInputs(field) {
    return event => {
      this.setState( { [field]: event.currentTarget.value } )
    }
  }

  render() {
    return (
      <form>
        <p>{this.props.errors}</p>
        <label>
          Title
          <input className="todo-title" type="text" placeholder="Todo Title" name="title" value={this.state.title} onChange={this.updateInputs("title")}/>
        </label>

        <label>
          Body
          <input className="todo-body" type="text" placeholder="Body" name="body" value={this.state.body} onChange={this.updateInputs("body")}/>
        </label>
        <input type="hidden" name="done" value="false"/>

        <button onClick={this.handleSubmit}>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;