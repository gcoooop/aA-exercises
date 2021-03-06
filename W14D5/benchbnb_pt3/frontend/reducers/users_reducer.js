import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from "../actions/sessions_actions";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    default:
        return state;
    };
};