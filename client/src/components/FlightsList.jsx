import React from 'react'
import FlightsFormSort from './FlightsFormSort'
import FlightsItem from './FlightsItem'

const FlightsList = ({ currency, flights, setStartDate, setStartPosition, setFinishPosition, sortFlights }) => {

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
                        {flights.rows.map(item => {
                            return (
                                <FlightsItem key={item.id} item={item} currency={currency} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default FlightsList;