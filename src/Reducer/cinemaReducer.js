import { SEAT_SELECT } from "../constants/cinemaConstants";
import cinema from "../MovieSeatSelection/data/danhSachGhe.json";

const initialState = { cinema };

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEAT_SELECT: {
      const { indexHang, indexCot } = action.payload;
      const newCinema = [...state.cinema];
      newCinema[indexHang].danhSachGhe[indexCot].daChon =
        !newCinema[indexHang].danhSachGhe[indexCot].daChon;

      return { ...state, cinema: newCinema };
    }

    default:
      return state;
  }
};

export default cinemaReducer;
