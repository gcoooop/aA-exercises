import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return event => {
      this.setState({ [field]: event.target.value })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign( {}, this.state )
    this.props.processForm(user);
  }

  render() {
    const { formType, errors } = this.props;
    const formHeader = (formType === "login" ? "Log In" : "Sign Up" );
    const linkAddress = (formType === "login" ? "/signup" : "/login" );
    const linkText = (formType === "login" ? "Register" : "Log In" );
    
    let errorsUl = null;
    if (errors) {
      const errorLis = errors.map( 
        (error, idx) => <li key={idx}>{error}</li> 
      );
      errorsUl = <ul className="errors">{errorLis}</ul>
    };
      
    return (
      <div className="session-form">

        <Link to={linkAddress}>{linkText}</Link>

        {errorsUl}

        <form>
          <h3>{formHeader}</h3>
          <label>
            Username
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleInput("username")}  />
          </label>
          <label>
            Password
            <input type="text" placeholder="Password" value={this.state.password} onChange={this.handleInput("password")}  />
          </label>
          <button onClick={this.handleSubmit}>{formHeader}</button>
        </form>

      </div>
    );
  }

}

export default SessionForm;