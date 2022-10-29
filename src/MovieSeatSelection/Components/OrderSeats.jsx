import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { bookTickets } from '../../actions/ticketActions'
import {useRef} from "react"
const OrderSeats = () => {
  const dispatch = useDispatch();

  const inputName = useRef();
  const inputNumSeats = useRef();


  const handleBookTickets = () => {
    const nameValue = inputName.current.value;
    const numSeatsValue = inputNumSeats.current.value;
    dispatch(bookTickets(nameValue,numSeatsValue));
  }
  return (
    <div className='order-seats text-center'>
      <h6 style={{color:"#ff9800"}}
      className="mb-4"
      >Fill The Required Details Below And Select Your Seats</h6>
      <Form className="row justify-content-center">
      <Form.Group className="mr-3">
        <Form.Label className='text-white'>Name
        <span style={{color:"red"}}> *</span>
        </Form.Label>
        
        <Form.Control type="text" ref={inputName}/>
      </Form.Group>

      <Form.Group>
        <Form.Label className='text-white'>
          Number of Seats 
          <span style={{color:"red"}}> *</span>
          </Form.Label>
        <Form.Control type="number" ref={inputNumSeats} />
      </Form.Group>
    </Form>
    <Button variant="btn bg-white my-3" type="submit" onClick={handleBookTickets} >
        Start Selecting
      </Button>
    </div>
  )
}

export default OrderSeats