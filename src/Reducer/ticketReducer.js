import { BOOK_TICKETS } from "../constants/ticketConstants";
import data from "../MovieSeatSelection/data/danhSachGhe.json";

const initialState = { data, customer: [{ name: "", numSeats: 0 }] };

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_TICKETS: {
      const { name, numSeats } = action.payload;
      if (name === "" || numSeats === 0) {
        return state;
      }
      const inputName = state.name;
      const inputNumSeats = state.numSeats;

      return { ...state, inputName, inputNumSeats };
    }
    default:
      return state;
  }
};

export default ticketReducer;
