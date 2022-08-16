import React from 'react'

const Novetly = ({novetly}) => {
  return (
    <div className="novetly__main">
        <div className='novetly__img'>
            <img src={process.env.REACT_APP_API_URL+novetly.image}/>
        </div>
        <div className='novetly__description'>
          {novetly.description}
        </div>
    </div>
  )
}

export default Novetly