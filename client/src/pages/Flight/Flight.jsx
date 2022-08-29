import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
/* import FlightList from '../../components/FlightList'; */

import './flight.css';

const Flight = () => {
    const { id } = useParams()

    const { flight } = useSelector(state => state.flights)
    const { is_admin } = useSelector(state => state.user)

    const { fetchGetFlight, fetchGetFlights, } = useAction()

    const [scheduleWith, setScheduleWith] = useState('')
    const [scheduleTo, setScheduleTo] = useState('')

    useEffect(() => {
        fetchGetFlight(id)
        fetchGetFlights({
            startPosition: flight.startPosition,
            finishPosition: flight.finishPosition
        })
    }, [])

    const changeSchedule = () => {
        fetchPutScheduleBus(id, scheduleWith, scheduleTo)
    }


    return (
        <div className='container-flight'>
            {/*  <FlightList
                flight={flight}
                changeStatus={changeStatus}
                is_admin={is_admin}
                setScheduleWith={setScheduleWith}
                setScheduleTo={setScheduleTo}
                changeSchedule={changeSchedule}
            /> */}
        </div>
    )
}


export default Flight;