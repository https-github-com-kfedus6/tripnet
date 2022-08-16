import React, { useState } from 'react'
import FlightsFormSort from './FlightsFormSort'
import FlightsItem from './FlightsItem'

const FlightsList = ({ flights, setStartDate, setStartPosition, setFinishPosition, sortFlights, sumOld, setSumOld, sumYoung, setSumYoung }) => {
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
                    sumOld={sumOld}
                    setSumOld={setSumOld}
                    sumYoung={sumYoung}
                    setSumYoung={setSumYoung}
                />
                <div className='flights-block'>
                    <div className='items-flight'>
                        {flights.rows.map(item => {
                            return (
                                <FlightsItem key={item.id} item={item} flights={flights} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default FlightsList;