import { useInsertionEffect } from "react";
import { ADD_TICKETS, CHOSE_SEAT, STATUS, TOTAL } from "../constants/ticketConstants";
const initialState = {
  bookedSeats: []
};

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
    case CHOSE_SEAT: {
      
      if(state.name=== undefined || state.numSeats===undefined){
        alert("Hãy điền tên và số lượng ghế")
        return { ...state};
      }
      if(state.bookedSeats.length >= state.numSeats){
        return {...state};
      }
      const newSeat = {
        ...action.payload,
        daChon: true
      }
      
      return {
        ...state,
        bookedSeats: [...state.bookedSeats, newSeat]
      }
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
