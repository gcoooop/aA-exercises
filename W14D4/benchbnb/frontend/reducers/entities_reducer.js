import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import BenchesReducer from "./benches_reducer";

export default combineReducers({
  users: usersReducer,
  benches: BenchesReducer
});
