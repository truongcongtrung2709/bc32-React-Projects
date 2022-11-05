import { SEAT_SELECT } from "../constants/cinemaConstants";

export const seatSelect = (indexHang, indexCot) => {
  return {
    type: SEAT_SELECT,
    payload: { indexHang, indexCot },
  };
};
