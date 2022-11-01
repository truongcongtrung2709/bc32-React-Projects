import { ADD_TICKETS } from "../constants/ticketConstants";
import { UPDATE_SEATS } from "../constants/ticketConstants";
export const addTickets = (name, numSeats, bookedSeats) => {
  return {
    type: ADD_TICKETS,
    payload: { name, numSeats, bookedSeats },
  };
};
export const updateSeats = (name, numSeats, bookedSeats) => {
  return {
    type: UPDATE_SEATS,
    payload: { name, numSeats, bookedSeats },
  };
};
