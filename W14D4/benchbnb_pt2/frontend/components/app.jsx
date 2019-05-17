import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => {
  return (
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
      <AuthRoute path="/login" component={LoginFormContainer} loggedIn={window.currentUser} />
      <AuthRoute path="/signup" component={SignupFormContainer} loggedIn={window.currentUser} />
    </header>
  );
};  

export default App;