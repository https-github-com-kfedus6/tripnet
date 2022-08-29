import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import FlightList from '../../components/FlightList';

import './flight.css';

const Flight = () => {
    const { id } = useParams()

    const { flight } = useSelector(state => state.flights)
    const { schedule, status } = useSelector(state => state.scheduleBus)
    const { flightComfort } = useSelector(state => state.comfort)
    const { is_admin } = useSelector(state => state.user)

    const {
        fetchGetFlight, fetchGetFlightComfort, fetchGetFlights,
        fetchPutScheduleBus, fetchGetScheduleBus, fetchGetScheduleBusStatus,
        fetchPutScheduleBusStatus, fetchPostScheduleBus, fetchPostScheduleBusStatus
    } = useAction()

    const [stateStatus, setStateStatus] = useState(false)
    const [arrSchedule, setArrSchedule] = useState('')
    const [scheduleWith, setScheduleWith] = useState('')
    const [scheduleTo, setScheduleTo] = useState('')
    const [mon, setMon] = useState('')
    const [tuesd, setTuesd] = useState('')
    const [wend, setWend] = useState('')
    const [thu, setThu] = useState('')
    const [fri, setFri] = useState('')
    const [sat, setSat] = useState('')
    const [sund, setSund] = useState('')

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
        fetchPutScheduleBus(id, scheduleWith, scheduleTo)
    }

    const createSchedule = () => {
        fetchPostScheduleBus({
            scheduleWith: scheduleWith,
            scheduleTo: scheduleTo,
            monday: mon,
            tuesday: tuesd,
            wednesday: wend,
            thursday: thu,
            friday: fri,
            suturday: sat,
            sunday: sund,
            flightId: id
        })
    }

    const createStatus = () => {
        fetchPostScheduleBusStatus({
            flightId: id,
            status: stateStatus
        })
    }

    if (!Array.isArray(arrSchedule)) {
        return (
            <div>loading</div>
        )
    } else {
        return (
            <div className='container-flight'>
                <FlightList
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
                    setMon={setMon}
                    setTuesd={setTuesd}
                    setWend={setWend}
                    setThu={setThu}
                    setFri={setFri}
                    setSat={setSat}
                    setSund={setSund}
                    createSchedule={createSchedule}
                    createStatus={createStatus}
                />
            </div>
        )
    }

}

export default Flight;