import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import OrderSeats from './OrderSeats'
import SelectSeats from './SelectSeats'
import Total from './Total'

export default class MovieSeatSelection extends Component {

  
  render() {
    return (
      <div className='body' style={{ backgroundImage: "url(/bgmovie.jpg)"}}>
        <h1 className='text-center py-4 text-white '>MOVIE SEAT SELECTION</h1>
        <div className='row justify-content-center'>
        <div className='seats-form px-5 py-5'  style={{background: "rgba(0, 0, 0, 0.5)"}}
        >
       <OrderSeats/> 
       <SelectSeats/>
       <Total/>
       </div>
        </div>
      </div>
    )
  }
}
