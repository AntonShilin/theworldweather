import { combineReducers } from "redux";
import { latestNewsReducer } from "../Reducer/LatestNewsReducer.js";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { locationReducer } from "../Reducer/LocationReducer.js";
import { recentCitiesReducer } from "../Reducer/RecentCitiesReducer.js";

export const rootReducer = combineReducers({
  news: latestNewsReducer,
  location: locationReducer,
  recentCities: recentCitiesReducer
});

export default function configureStore() {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
