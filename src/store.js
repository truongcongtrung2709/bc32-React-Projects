import { combineReducers, createStore } from "redux";
import ticketReducer from "./Reducer/ticketReducer";

const reducer = combineReducers({
  booktickets: ticketReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
