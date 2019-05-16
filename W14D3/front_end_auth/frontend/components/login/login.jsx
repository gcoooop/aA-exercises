import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    debugger
  }

  handleInput(field) {
    return event => {
      return this.setState({ [field]: event.target.value })
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state)
  }

  render() {
    return (
      <div className="session-form">
        <h2>Log In</h2>
        <form>
          <label>
            Username
            <input type="text" value={this.props.username} onChange={this.handleInput("username")} />  
          </label>        
          <label>
            Password
            <input type="password" value={this.props.password} onChange={this.handleInput("password")} />  
          </label>    
          <button onClick={this.handleSubmit}>Log In</button>    
        </form>
      </div>
    )
  }
}

export default Login;