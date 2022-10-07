import React from 'react'

const GlassesList = ({glasses, onSelect}) => {
  
  return (

    <div className='row bg-white justify-content-center'>
      {glasses.map((glass)=>(
        <div key={glass.id}>
          <div className='item' onClick={() => onSelect(glass)}>
            <img src={glass.url} alt={glass.name}
            className="item-img"
            width="150px"
             />
          </div>
        </div>
      ))}
    </div>
  )
}

export default GlassesList