import React from 'react'
import Table from 'react-bootstrap/Table'
import { useSelector } from "react-redux";
const Total = () => {

  const bookTickets = useSelector((state) => state.bookTickets);
// console.log(bookTickets);
  return (

    <div className='displayTotal my-5'>
         <Table striped bordered hover className='displayTable bg-white'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number of Seats</th>
          <th>Seats</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr className='bg-dark'>
          <td>{bookTickets.name}</td>
          <td>{bookTickets.numSeats}</td>
          {bookTickets.bookedSeats.map((item)=>(
            <td>{item.soGhe}</td>
          ))}
          <td></td>
        </tr> */}
        
      </tbody>
    </Table>
    </div>
  )
}

export default Total