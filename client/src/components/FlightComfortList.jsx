import React from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { useSelector } from 'react-redux'

const FlightComfortList = ({ flight, flightComfort }) => {
    const {language}=useSelector(state=>state.language);
    return (
        <div className='block-flight'>
            <div className='block-position-price'>
                <div>
                    <h1>{flight.startPosition[language]}</h1>
                    <span><ImArrowRight2 /></span>
                    <h1>{flight.finishPosition[language]}</h1>
                </div>
                <div>
                    <span>{flight.price}.00 UAH</span>
                </div>
            </div>
            <div className='block-comfort'>
                <div>
                    <h2>Комфорт рейса</h2>
                </div>
                <div className='items-comfort'>
                    {flightComfort.map(item => {
                        return (
                            <div key={item.id} className='item-comfort'>
                                <img src={process.env.REACT_APP_API_URL + item.image} alt="comfort" />
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flight-description'>
                <h2>Інформація про рейс {flight.startPosition[language]} - {flight.finishPosition[language]}:</h2>
                <p>{flight.description}</p>
            </div>
        </div>
    )
}

export default FlightComfortList;