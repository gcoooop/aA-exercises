import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {
  
  if (props.currentUser) {
    return (
      <div className="greeting">
        <h2>Do you even bench, {props.currentUser.username}?</h2>
        <button onClick={props.logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="greeting">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  };

};

export default Greeting;