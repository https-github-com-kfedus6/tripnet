import React, { useEffect, useState } from 'react';
import FlightsList from '../../components/FlightsList';
import { useAction } from '../../hooks/useAction';
import '../Flights/flights.css';

const Flights = () => {
    const [startPosition, setStartPosition] = useState('')
    const [finishPosition, setFinishPosition] = useState('')
    const [startDate, setStartDate] = useState('')

    const { fetchGetFlights } = useAction()

    useEffect(() => {
        fetchGetFlights()
    }, [])

    const sortFlights = (event) => {
        event.preventDefault()
        fetchGetFlights({
            startPosition: startPosition,
            finishPosition: finishPosition,
            startDate: startDate
        })
    }

    return (
        <FlightsList
            sortFlights={sortFlights}
            setStartDate={setStartDate}
            setStartPosition={setStartPosition}
            setFinishPosition={setFinishPosition}
        />
    )
}

export default Flights;