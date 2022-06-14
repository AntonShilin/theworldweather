import { combineReducers } from "redux";
import { latestNewsReducer } from "../Reducer/LatestNewsReducer.js";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { recentCitiesReducer } from "../Reducer/RecentCitiesReducer.js";

export const rootReducer = combineReducers({
  news: latestNewsReducer,
  recent: recentCitiesReducer
});

export default function configureStore() {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
