    import React from 'react'
    
    const GlassesTryOn = ({glass}) => {
      if(!glass){
        return null;
      }
      return (
        <div>
          <img className='img-try-glass' src={glass.url} alt={glass.name} width="150px" />
        </div>
      )
    }
    
    export default GlassesTryOn