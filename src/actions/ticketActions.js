import { ADD_TICKETS, TOTAL } from "../constants/ticketConstants";

export const addTickets = (name, numSeats, bookedSeats) => {
  return {
    type: ADD_TICKETS,
    payload: { name, numSeats, bookedSeats },
  };
};

export const total = () => {
  
  return {
    type: TOTAL,

  };
};
