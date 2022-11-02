import { ADD_TICKETS, UPDATE_SEAT } from "../constants/ticketConstants";

export const addTickets = (name, numSeats, bookedSeats) => {
  return {
    type: ADD_TICKETS,
    payload: { name, numSeats, bookedSeats },
  };
};
// export const updateSeats = (name, numSeats, bookedSeats) => {
//   return {
//     type: UPDATE_SEAT,
//     payload: { name, numSeats, bookedSeats },
//   };
// };
