import { ADD_TICKETS, TOTAL } from "../constants/ticketConstants";
const initialState = {};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKETS:
      const {name, numSeats, bookedSeats} = action.payload;
      if(name === "" || numSeats === 0)
      {
        return state;
      }
      return {...state, name, numSeats, bookedSeats};
    case TOTAL:{
      const{soGhe, gia} =  action.payload;
      
      

      return [...state,
         state.name,
          state.numSeats,
          state.bookedSeats,
          soGhe,
          gia
        ];
      }
    default:
      return state;
  }
};

export default ticketReducer;
