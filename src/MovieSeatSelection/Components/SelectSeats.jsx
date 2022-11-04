import React from "react";
import { Button } from "react-bootstrap";
import Seat from "./Seat";
import { useSelector } from "react-redux";


const SelectSeats = () => {
  const {cinema} = useSelector((state) => state.cinema);
  
  return (  
    <div className="select-content">
      <ul className="note-seats">
        <li className="smallBox greenBox">Selected Seat</li>
        <li className="smallBox redBox">Reserved Seat</li>
        <li className="smallBox whiteBox">Empty Seat</li>
      </ul>
      <div className="containerCinema">
        <Seat cinema={cinema}/>
      </div>
      
    </div>
  );
};

export default SelectSeats;
