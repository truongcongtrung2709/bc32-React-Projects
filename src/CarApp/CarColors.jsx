import React from 'react'
const CarColors = ({carColors, onSelect}) => {

  return (
    <div className='card'
        
    >
        <div className="card-header">
            <h6>Exterior Color</h6>
        </div>
        <div className="card-body">
            {carColors.map((carColor)=>(
                <div key={carColor.id} 
                className="crystal"
                onClick={()=>onSelect(carColor)}
                >
                    <div className="thumb">
                        <img src={carColor.img} alt={carColor.title} />
                    </div>
                    <div className="color-info">
                        <h6>{carColor.title}</h6>
                        <p>{carColor.type}</p>
                    </div>
                    
                </div>
            ))}
        </div>

    </div>
  )
}

export default CarColors