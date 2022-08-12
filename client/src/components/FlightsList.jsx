import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const FlightsList = ({ flights }) => {
    console.log(flights)

    return (
        <div className='flights-container'>
            <div className='flights-block'>
                <div className='items-flight'>
                    {flights.map(item => {
                        return (
                            <div className='item-flight' key={item.id}>
                                <div className='item-time'>
                                    <span>{item.startTime}</span>
                                    <span>{item.finishTime}</span>
                                </div>
                                <div className='item-date'>
                                    <span>{item.startData}</span>
                                    <span>{item.finishDate}</span>
                                </div>
                                <div className='item-position'>
                                    <span>{item.startPosition}</span>
                                    <span>{item.finishPosition}</span>
                                </div>
                                <div className='btn-buy'>
                                    <button><div><FaShoppingCart /></div><span>{item.price}.00</span></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FlightsList;