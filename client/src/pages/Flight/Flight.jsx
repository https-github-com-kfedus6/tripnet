import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import FlightList from '../../components/FlightList';

import './flight.css';

const Flight = () => {

    const { id } = useParams()

    const { flight, status, relinkBlocks } = useSelector(state => state.flights)
    const { is_admin, is_login, user } = useSelector(state => state.user)
    const { language } = useSelector(state => state.language);
    const { fetchGetFlight, fetchGetFlights, fetchPutFlightStatus, fetchPutFlightBusDate,
        GetRelinkBlocks } = useAction()

    const [scheduleWith, setScheduleWith] = useState('')
    const [scheduleTo, setScheduleTo] = useState('')

    useEffect(() => {

    }, [language])

    useEffect(() => {
        fetchGetFlight(id)
        fetchGetFlights({
            startPosition: flight.startPosition,
            finishPosition: flight.finishPosition
        })
    }, [id])

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

    useEffect(() => {
        GetRelinkBlocks(id);
    }, [id])

    if (!Array.isArray(flight)) {
        return (
            <div className='flight'>
                <FlightList
                    flight={flight}
                    is_admin={is_admin}
                    setScheduleTo={setScheduleTo}
                    setScheduleWith={setScheduleWith}
                    status={status}
                    changeStatus={changeStatus}
                    changeSchedule={changeSchedule}
                    relinkBlocks={relinkBlocks}
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