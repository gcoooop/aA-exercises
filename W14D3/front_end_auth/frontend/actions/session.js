import { postUser, postSession, deleteSession } from "../utils/session";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const createNewUser = formUser => {
  return dispatch => {
    return postUser(formUser).then( user => dispatch(receiveCurrentUser(user)) );
  };
};

export const login = formUser => {
  return dispatch => {
    return postSession(formUser).then( user => dispatch(receiveCurrentUser(user)) );
  };
};

export const logout = () => {
  return dispatch => {
    return deleteSession().then( () => dispatch(logoutCurrentUser()) );
  };
};