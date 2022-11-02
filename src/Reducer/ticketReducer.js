import { ADD_TICKETS, UPDATE_SEAT } from "../constants/ticketConstants";
const initialState = [];

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKETS:
      return [...state, action.payload];
    // case UPDATE_SEAT:
    //   return [...state, action.payload];
  
    default:
      return state;
  }
};

export default ticketReducer;
