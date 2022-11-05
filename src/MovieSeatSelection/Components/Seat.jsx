import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {Button} from "react-bootstrap"
import { choseSeat, total } from '../../actions/ticketActions';
import { seatSelect } from '../../actions/cinemaAction';

const Seat = ({cinema}) => {
    const dispatch = useDispatch();
    const { bookedSeats } = useSelector((state) => state.bookTickets);
    const [count, setCount] = useState(1)
    const [clickDisabled, setClickDisabled] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
const handleSelectSeats = (seat) => {
    dispatch(choseSeat(seat))

    // const numSeats = parseInt(bookTickets.numSeats,10)
    // const bookedSeats = bookTickets.bookedSeats

    // const arrSoGhe = bookedSeats.map((item)=> item.soGhe)
   
    // if(arrSoGhe.indexOf(seat.soGhe) === -1){
    //   bookedSeats.push(seat);
    //   setCount(count+1);
    //   if(numSeats === count || numSeats < count && !arrSoGhe.indexOf(seat.soGhe) === -1)
    //   {   
    //      bookedSeats.pop();
    //      setCount(count-1);
    //   }
    // }
       
    // else{
    //   bookedSeats.pop();
    //   setCount(count-1);
    // }
    // // cái đó có bạn a chỉ, mà a chưa hiểu á
    // console.log(count);
    // console.log(seat);
    // console.log(bookedSeats);

}
const handleTotal = () => {
  // console.log(bookTickets.bookedSeats);
  // const bookedSeats = bookTickets.bookedSeats;
  // if(bookedSeats.length < bookTickets.numSeats){
  //   alert("Hãy nhập đủ số ghế")
  //   return;
  // }
  // const arrSoGhe = bookedSeats.map((item)=>item.soGhe)
  // const totalPrice = bookedSeats.reduce((total,item)=>total = total + item.gia,0);
  // const soGhe = arrSoGhe.join(',');
  // console.log(soGhe);
  // console.log(totalPrice);
  // console.log(bookedSeats);
  dispatch(total());
  setIsDisabled(!isDisabled);
}


   
  return (
    <>
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
              const getSoGhe = bookedSeats.map(i => i.soGhe);
              const isExists = getSoGhe.some(i =>i === seat.soGhe);
              console.log(seat);

              // const cancelSeats = soGhe.
              return (
                <div key={seatIndex}
                  className={`
                  ghe ${seatIndex === 4 ? "mr-5" : ""}
                  ${isExists ? 'gheDangChon': ''}
                  `}
                  onClick={clickDisabled ? () =>{} : () => handleSelectSeats(seat)}
                ></div>
              );
            })}
          </div>
        ))}
        <div className="screen-center text-center my-4 ">
        <h3 className="text-black">Screen This Way</h3>
      </div>
      <div className="text-center">
        <Button className="bg-white text-dark"
        onClick={handleTotal}
        disabled={isDisabled}
        >Confirm Selection</Button>
      </div>
    </>
  )
}
export default Seat