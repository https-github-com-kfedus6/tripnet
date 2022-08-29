import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import FlightList from '../../components/FlightList';

import './flight.css';

const Flight = () => {
    const { id } = useParams()

    const { flight, status } = useSelector(state => state.flights)
    const { is_admin } = useSelector(state => state.user)

    const { fetchGetFlight, fetchGetFlights, fetchPutFlightStatus, fetchPutFlightBusDate } = useAction()

    const [scheduleWith, setScheduleWith] = useState('')
    const [scheduleTo, setScheduleTo] = useState('')

    useEffect(() => {
        fetchGetFlight(id)
        fetchGetFlights({
            startPosition: flight.startPosition,
            finishPosition: flight.finishPosition
        })
    }, [])

    const changeStatus = (sheduleBusId, id, status) => {
        if (status === true) {
            status = false
        } else {
            status = true
        }
        fetchPutFlightStatus(sheduleBusId, id, status)
    }

    const changeSchedule = (id) => {
        fetchPutFlightBusDate(id, scheduleWith, scheduleTo)
    }

    if (!Array.isArray(flight)) {
        return (
            <div className='container-flight'>
                <FlightList
                    flight={flight}
                    is_admin={is_admin}
                    setScheduleTo={setScheduleTo}
                    setScheduleWith={setScheduleWith}
                    status={status}
                    changeStatus={changeStatus}
                    changeSchedule={changeSchedule}
                />
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}


export default Flight;