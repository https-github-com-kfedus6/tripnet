import React, { useEffect } from 'react';
import FlightsList from '../../components/FlightsList';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import '../Flights/flights.css';

const Flights = () => {

    const { fetchGetFlights } = useAction()

    const { flights } = useTypedSelector(state => state.flights)

    useEffect(() => {
        fetchGetFlights()
    }, [])

    return (
        <FlightsList
            flights={flights}
        />
    )
}

export default Flights;