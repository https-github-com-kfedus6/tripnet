import React from 'react'
import { useSelector } from 'react-redux'

const Novetly = ({novetly}) => {
  const {language}=useSelector(state=>state.language);
  return (
    <div className="novetly__main">
        <div className='novetly__img'>
            <img src={process.env.REACT_APP_API_URL+novetly.image}/>
        </div>
        <div className='novetly__description'>
          {novetly.description[language]}
        </div>
    </div>
  )
}

export default Novetly