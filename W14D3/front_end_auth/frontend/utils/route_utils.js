import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mstp = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const Auth = ({ loggedIn, path, component: Component }) => {
  return <Route 
    path={path} 
    render={props => {
      return loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }}
  />
};

const Protected = ({ loggedIn, path, component: Component }) => {
  return <Route
    path={path}
    render={props => {
      return loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    }}
  />
}

export const AuthRoute = withRouter(connect(mstp, null)(Auth));
export const ProtectedRoute = withRouter(connect(mstp, null)(Protected));