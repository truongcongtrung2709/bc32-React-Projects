import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addTickets } from "../../actions/ticketActions";
import { useState } from "react";
const OrderSeats = () => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const [ticket, setTicket] = useState({
    name: "",
    numSeats: 0,
    bookedSeats: [],
  });

  

  const handleChangeForm = (key, value) => {
    setTicket({
      ...ticket,
      [key]: value,
    });
  };

  const handleBookTickets = () => {
    if (ticket.name === "" || ticket.numSeats === 0) {
      alert("Hãy điền đầy đủ thông tin");
      return;
    }
    else{
      setIsDisabled(!isDisabled);
      setIsShow(current => !current);
      dispatch(addTickets(ticket.name, ticket.numSeats,ticket.bookedSeats));
    }  
  };
  return (
    <div className="order-seats text-center">
      <h6
        style={{
          color: "#ff9800",
        }}
        className="mb-4"
      >
        Fill The Required Details Below And Select Your Seats
      </h6>
      <Form className="row justify-content-center">
        <Form.Group className="mr-3">
          <Form.Label className="text-white">
            Name
            <span style={{ color: "red" }}> *</span>
          </Form.Label>

          <Form.Control
            type="text"
            onChange={(e) => {
              handleChangeForm("name", e.target.value);
            }}
            disabled={isDisabled}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="text-white">
            Number of Seats
            <span style={{ color: "red" }}> *</span>
          </Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => {
              handleChangeForm("numSeats", e.target.value);
            }}
            disabled={isDisabled}
          />
        </Form.Group>
      </Form>
      <Button
        variant="btn bg-white my-3"
        type="submit"
        onClick={() => handleBookTickets()}
        disabled={isDisabled}
      >
        Start Selecting
      </Button>
      <div className="notification my-2"
      style={{
        display: isShow? 'block' : 'none',
      }}
      >
        <p>Please Select your Seats NOW!</p>
      </div>
    </div>
  );
};

export default OrderSeats;
