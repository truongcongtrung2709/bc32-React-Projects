import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const OrderSeats = () => {
  return (
    <div className='order-seats'>
      <h6 style={{color:"#ff9800"}}
      className="mb-4"
      >Fill The Required Details Below And Select Your Seats</h6>
      <Form className="row">
      <Form.Group className="mr-3">
        <Form.Label className='text-white'>Name
        <span style={{color:"red"}}> *</span>
        </Form.Label>
        
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label className='text-white'>
          Number of Seats 
          <span style={{color:"red"}}> *</span>
          </Form.Label>
        <Form.Control type="number" />
      </Form.Group>
    </Form>
    <Button variant="btn bg-white my-3" type="submit">
        Start Selecting
      </Button>
    </div>
  )
}

export default OrderSeats