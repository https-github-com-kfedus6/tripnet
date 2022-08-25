import React from 'react'
import FlightsFormSort from './FlightsFormSort'
import FlightsItem from './FlightsItem'

const FlightsList = ({ flights, setStartDate, setStartPosition, setFinishPosition, sortFlights, sumOld, setSumOld, sumYoung, setSumYoung, deleteFlight, limit, page }) => {
    console.log(flights);
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
                    deleteFlight={deleteFlight}
                    limit={limit}
                    page={page}
                />
                <div className='flights-block'>
                    <div className='items-flight'>
                        {flights.rows.map(item => {
                            return (
                                <FlightsItem key={item.id} item={item} flights={flights} sumOld={sumOld} sumYoung={sumYoung} deleteFlight={deleteFlight} limit={limit} page={page} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default FlightsList;