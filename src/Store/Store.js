import { combineReducers, createStore } from "redux";
import { mainReducer } from "../Reducer/MainReducer.js";

const rootReducer = combineReducers({
    main: mainReducer,
  });
  
  
  export default function configureStore(){
    const store = createStore(rootReducer);
    store.subscribe(() => console.log("Store subscribe",store.getState()))
    return store;
  }