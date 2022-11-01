import { ADD_TICKETS } from "../constants/ticketConstants";

export const addTickets = (name, numSeats, bookedSeats) => {
  return {
    type: ADD_TICKETS,
    payload: { name, numSeats, bookedSeats },
  };
};
