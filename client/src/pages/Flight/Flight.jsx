import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import FlightComfortList from '../../components/FlightComfortList';

import '../Flight/flight.css';

const Flight = () => {
    const { id } = useParams()

    const { flight } = useSelector(state => state.flights)
    const { schedule, status } = useSelector(state => state.scheduleBus)
    const { flightComfort } = useSelector(state => state.comfort)
    const { is_admin } = useSelector(state => state.user)

    const {
        fetchGetFlight, fetchGetFlightComfort, fetchGetFlights,
        fetchPutScheduleBus, fetchGetScheduleBus, fetchGetScheduleBusStatus,
        fetchPutScheduleBusStatus
    } = useAction()

    const [arrSchedule, setArrSchedule] = useState('')
    const [scheduleWith, setScheduleWith] = useState('')
    const [scheduleTo, setScheduleTo] = useState('')

    useEffect(() => {
        fetchGetFlight(id)
        fetchGetFlightComfort()
        fetchGetFlights({
            startPosition: flight.startPosition,
            finishPosition: flight.finishPosition
        })
        fetchGetScheduleBus(id)
        fetchGetScheduleBusStatus(id)
    }, [])

    useEffect(() => {
        let resulet = []
        resulet.push(schedule)
        setArrSchedule(resulet)
    }, [schedule])

    const changeStatus = (id, status) => {
        if (status === true) {
            status = false
        } else {
            status = true
        }
        fetchPutScheduleBusStatus(id, status)
    }

    const changeSchedule = () => {
        fetchPutScheduleBus(schedule.id, scheduleWith, scheduleTo)
    }

    if (!Array.isArray(arrSchedule)) {
        return (
            <div>loading</div>
        )
    } else {
        return (
            <div className='container-flight'>
                <FlightComfortList
                    flight={flight}
                    flightComfort={flightComfort}
                    schedule={schedule}
                    arrSchedule={arrSchedule}
                    status={status}
                    changeStatus={changeStatus}
                    is_admin={is_admin}
                    setScheduleWith={setScheduleWith}
                    setScheduleTo={setScheduleTo}
                    changeSchedule={changeSchedule}
                />
            </div>
        )
    }

}

export default Flight;