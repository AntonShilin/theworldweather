import { combineReducers } from "redux";
import { mainReducer } from "../Reducer/MainReducer.js";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  main: mainReducer,
});

export default function configureStore() {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
