import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";

import thunk from "../middleware/thunk";

const configureStore = (initialState) => createStore(rootReducer, initialState, applyMiddleware(thunk));

export default configureStore;
