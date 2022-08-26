import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import FlightComfortList from '../../components/FlightComfortList';

import '../Flight/flight.css';

const Flight = () => {
    const { id } = useParams()

    const { flight, flights } = useSelector(state => state.flights)
    const { schedule } = useSelector(state => state.scheduleBus)
    const { flightComfort } = useSelector(state => state.comfort)

    const { fetchGetFlight, fetchGetFlightComfort, fetchGetFlights, fetchGetScheduleBus } = useAction()

    useEffect(() => {
        fetchGetFlight(id)
        fetchGetFlightComfort()
        fetchGetFlights({
            startPosition: flight.startPosition,
            finishPosition: flight.finishPosition
        })
        fetchGetScheduleBus(id)
    }, [])

    return (
        <div className='container-flight'>
            <FlightComfortList
                flight={flight}
                flightComfort={flightComfort}
                schedule={schedule}
            />
        </div>
    )
}

export default Flight;