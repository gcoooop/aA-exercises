import { RECEIVE_BENCHES } from "../actions/benches_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return Object.assign({}, state, action.benches);
  
    default:
      return state;
  }
};