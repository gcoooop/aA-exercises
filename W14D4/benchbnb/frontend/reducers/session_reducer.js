import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from "../actions/sessions_actions";

const defaultState = {
    id: null
};

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign( {}, state, { id: action.currentUser.id } );
    case LOGOUT_CURRENT_USER:
        return Object.assign( {}, state, { id: null } );
    default:
      return state;
    };
};