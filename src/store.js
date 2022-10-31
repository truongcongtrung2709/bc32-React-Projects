import { combineReducers, createStore } from "redux";
import ticketReducer from "./Reducer/ticketReducer";
import cinemaReducer from "./Reducer/cinemaReducer";
const reducer = combineReducers({
  cinema: cinemaReducer,
  bookTickets: ticketReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
