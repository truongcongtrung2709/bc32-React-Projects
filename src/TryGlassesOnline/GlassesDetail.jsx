import React from 'react'

const GlassesDetail = ({glass}) => {
  if(!glass){
    return null;
  }

  return (
    <div>
      <div className="img-glass">
        <img src={glass.url} alt={glass.name} width="150px"/>
      </div>
      <div className="detail">
          <h3 className='text-primary'>{glass.name}</h3>
          <span className='text-white'>{glass.desc}</span>
      </div>
    </div>
  )
}

export default GlassesDetail