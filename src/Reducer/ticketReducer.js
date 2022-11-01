import { ADD_TICKETS, UPDATE_SEATS } from "../constants/ticketConstants";
const initialState = [];

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKETS:
      return [...state, action.payload];

    case UPDATE_SEATS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ticketReducer;
