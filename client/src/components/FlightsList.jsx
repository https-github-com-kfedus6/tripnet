import React from 'react'
import { useState } from 'react'
import FlightsFormSort from './FlightsFormSort'
import FlightsItem from './FlightsItem'

const FlightsList = ({ flights, setStartDate, setStartPosition, setFinishPosition, sortFlights }) => {
    const [check, setCheck] = useState(false)

    if (flights.length === 0) {
        return (
            <div>loading...</div>
        )
    } else {
        return (
            <div className='flights-container'>
                <FlightsFormSort
                    setStartDate={setStartDate}
                    setStartPosition={setStartPosition}
                    setFinishPosition={setFinishPosition}
                    sortFlights={sortFlights}
                />
                <div className='flights-block'>
                    <div className='items-flight'>
                        {flights.map(item => {
                            return (
                                <FlightsItem key={item.id} item={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default FlightsList;