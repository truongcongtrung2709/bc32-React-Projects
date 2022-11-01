import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
const SelectSeats = () => {
  const {cinema} = useSelector((state) => state.cinema);
  const bookTickets = useSelector((state) => state.bookTickets);
  console.log(bookTickets);
  return (  
    <div className="select-content">
      <ul className="note-seats">
        <li className="smallBox greenBox">Selected Seat</li>
        <li className="smallBox redBox">Reserved Seat</li>
        <li className="smallBox whiteBox">Empty Seat</li>
      </ul>
      <div className="notification my-2">
        <p>Please Select your Seats NOW!</p>
      </div>
      <div className="containerCinema">
        {cinema.map((row, rowIndex) => (
          <div key={row.hang} className={`row text-center ${rowIndex === 5 ? "mb-5" : ""}`}>
            <div className="rowNumber">{row.hang}</div>
            {row.danhSachGhe.map((seat, seatIndex) => {
              if (rowIndex === 0) {
                return (
                  <div key={seat.soGhe}  className={`rowNumber ${seatIndex === 4 ? "mr-5" : ""}`}>
                    {seat.soGhe}
                  </div>
                );
              }
              return (
                <div key={seat.soGhe}
                  className={`ghe ${seatIndex === 4 ? "mr-5" : ""}`}
                  onClick={() =>{console.log(seat);}}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="screen-center text-center my-4 ">
        <h3 className="text-black">Screen This Way</h3>
      </div>
      <div className="text-center">
        <Button className="bg-white text-dark">Confirm Selection</Button>
      </div>
    </div>
  );
};

export default SelectSeats;
