import React from 'react'
import '../styles/BaiTapBookingTicket.css'
import OrderSeats from '../Components/OrderSeats'
import SelectSeats from '../Components/SelectSeats'
import Total from '../Components/Total'
const MovieSeatSelection= () =>{
    return (
      <div className='body'>
        <h1 className='text-center py-4 text-white '>MOVIE SEAT SELECTION</h1>
        <div className='row justify-content-center'>
        <div className='seats-form py-5'  style={{background: "rgba(0, 0, 0, 0.5)"}}
        >
       <OrderSeats /> 
       <SelectSeats />
       <Total/>
       </div>
        </div>
      </div>
    )
  }

export default MovieSeatSelection

