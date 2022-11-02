import React from "react";
import Button from "react-bootstrap/Button";
import Seat from "./Seat";
const SelectSeats = () => {
  
  return (  
    <div className="select-content">
      <ul className="note-seats">
        <li className="smallBox greenBox">Selected Seat</li>
        <li className="smallBox redBox">Reserved Seat</li>
        <li className="smallBox whiteBox">Empty Seat</li>
      </ul>
      <div className="containerCinema">
        <Seat/>
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
