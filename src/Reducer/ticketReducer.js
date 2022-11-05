import { ADD_TICKETS, STATUS, TOTAL } from "../constants/ticketConstants";
const initialState = {};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKETS:
      const { name, numSeats, bookedSeats } = action.payload;
      if (name === "" || numSeats === 0) {
        return state;
      }
      return { ...state, name, numSeats, bookedSeats };
    case STATUS: {
      const bookedSeats = state.bookedSeats;
      const isReserved = bookedSeats.daDat;
      console.log(isReserved);
      return { ...state, isReserved };
    }
    case TOTAL: {
      const name = state.name;
      const numSeats = state.numSeats;
      const bookedSeats = state.bookedSeats;
      if (bookedSeats.length < numSeats) {
        alert("Hãy nhập đủ số ghế");
        return;
      }
      const arrSoGhe = bookedSeats.map((item) => item.soGhe);
      const soGhe = arrSoGhe.join(",");
      const gia = bookedSeats.reduce((total, item) => total + item.gia, 0);
      // console.log(name, numSeats, bookedSeats, soGhe, gia);
      return {
        ...state,
        name,
        numSeats,
        bookedSeats,
        soGhe,
        gia,
      };
    }
    default:
      return state;
  }
};

export default ticketReducer;
