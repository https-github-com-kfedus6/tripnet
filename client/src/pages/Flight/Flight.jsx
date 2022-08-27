import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import FlightComfortList from '../../components/FlightComfortList';

import './flight.css';

const Flight = () => {
    const { id } = useParams()

    const { flight } = useSelector(state => state.flights)
    const { flightComfort } = useSelector(state => state.comfort)

    const { fetchGetFlight, fetchGetFlightComfort } = useAction()

    useEffect(() => {
        fetchGetFlight(id)
        fetchGetFlightComfort()
    }, [])
    console.log(flight);
    return (
        flight.length==0?<></>:
        <div className='container-flight'>
            <FlightComfortList
                flight={flight}
                flightComfort={flightComfort}
            />
        </div>
    )
}

export default Flight;