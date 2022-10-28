import { BOOK_TICKETS } from "../constants/ticketConstants";
export const bookTickets = ( name, numSeats) => {
  return {
    type: BOOK_TICKETS,
    payload: { name, numSeats },
  };
};
