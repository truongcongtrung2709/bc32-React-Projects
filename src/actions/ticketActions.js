import { ADD_TICKETS, CHOSE_SEAT, STATUS, TOTAL } from "../constants/ticketConstants";

export const addTickets = (name, numSeats, bookedSeats) => {
  return {
    type: ADD_TICKETS,
    payload: { name, numSeats, bookedSeats },
  };
};
export const status = () => {
  return {
    type: STATUS,
  };
};
export const total = () => {
  return {
    type: TOTAL,
  };
};

export const choseSeat = (item) => {
  return {
    type: CHOSE_SEAT,
    payload: item
  }
}