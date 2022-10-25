import React from 'react'
const CarWheels = ({carWheels , onSelect}) => {
  return (
    <div className='card'>
        <div className="card-header">
            <h6>Wheels</h6>
        </div>
        <div className="card-body">
            {carWheels.map((carWheel)=>(
                <div key={carWheel.idWheel} className="crystal"
                onClick={() => onSelect(carWheel)}
                
                >
                    <div className="thumb">
                        <img src={carWheel.img} alt={carWheel.title} />
                    </div>
                    <div className="color-info">
                        <h6>{carWheel.title}</h6>
                        <p>{carWheel.price} $</p>
                    </div>
                    
                </div>
            ))}
        </div>

    </div>
  )
}

export default CarWheels