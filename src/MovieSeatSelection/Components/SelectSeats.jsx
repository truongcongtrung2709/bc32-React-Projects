import React from 'react'
import Button from 'react-bootstrap/Button';
const SelectSeats = () => {

    
  return (
    <div className='select-content'>
        <ul className="note-seats my-3 row">
            <li className='smallBox greenBox'>
                Selected Seat
            </li>
            <li className='smallBox redBox'>
            Reserved Seat
            </li>
            <li className='smallBox whiteBox'>
            Empty Seat
            </li>
        </ul>
        <div className='notification my-5'>
            <p>Please Select your Seats NOW!</p>
            </div>
        <table className="seatsArea">
            <tbody>
                <tr>
                </tr>
            </tbody>
        </table>
        <div className="screen-center text-center my-5">
            <h3 className='text-black'>Screen This Way</h3>
        </div>
        <div className='text-center'>
        <Button className='bg-white text-dark my-4'>Confirm Selection</Button>
        </div>
    </div>
  )
}

export default SelectSeats