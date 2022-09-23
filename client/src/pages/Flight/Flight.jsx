import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import FlightList from '../../components/FlightList';
import { Breadcrumbs, Typography } from '@mui/material';
import ModalFormBuy from '../../components/UI/modalFormBuy/ModalFormBuy';
import { t } from 'i18next';

import './flight.css';

const Flight = () => {
    const [visibleBuy, setVisiblyBuy] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [countTicket, setCountTicket] = useState(1)

    const { id } = useParams()

    const { flight, status, relinkBlocks } = useSelector(state => state.flights)
    const { is_admin, is_login, user } = useSelector(state => state.user)
    const { language } = useSelector(state => state.language);
    const { fetchGetFlight, fetchGetFlights, fetchPutFlightStatus, fetchPutFlightBusDate,
        GetRelinkBlocks, SetShowMessgeTrue, SetShowMessgeFalse, postFlightOrder } = useAction()
    const [date,setDate]=useState("");

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

    const reserveTicket = () => {
        const regTelephone = /(^\++\d{11}$)|(^\d{10})$/;
        if (!regTelephone.test(phone)) {
            SetShowMessgeTrue(t("authorize.invalid_telephone"));
            setTimeout(() => SetShowMessgeFalse(), 3000);
            return;
        }
        setVisiblyBuy(false);
        if (!is_login) {
            postFlightOrder({
                flightId: id,
                authorName: name,
                countTicket: countTicket,
                phone: phone,
                date
            })
        } else {
            postFlightOrder({
                flightId: id,
                authorName: name,
                countTicket: countTicket,
                phone: phone,
                userId: user.id,
                date
            })
        }
        setCountTicket(1)
    }

    if (!Array.isArray(flight)) {
        return (
            <>
                <div className='bread__crumbs__main'>
                    <Breadcrumbs>
                        <NavLink to="/">
                            {t("header.first_link")}
                        </NavLink>
                        <NavLink to="/flightsCategory">
                            {t("header.third_link")}
                        </NavLink>
                        <Typography color="text.primary">{flight.startPosition[language]}-{flight.finishPosition[language]}</Typography>
                    </Breadcrumbs>
                </div>

                <div className='container-flight'>
                    <FlightList
                        flight={flight}
                        is_admin={is_admin}
                        setScheduleTo={setScheduleTo}
                        setScheduleWith={setScheduleWith}
                        status={status}
                        changeStatus={changeStatus}
                        changeSchedule={changeSchedule}
                        relinkBlocks={relinkBlocks}
                        setVisiblyBuy={setVisiblyBuy}
                    />
                    <ModalFormBuy
                        setDate={setDate}
                        visibleBuy={visibleBuy}
                        setVisiblyBuy={setVisiblyBuy}
                        name={name}
                        setName={setName}
                        phone={phone}
                        setPhone={setPhone}
                        reserveTicket={reserveTicket}
                        countTicket={countTicket}
                        setCountTicket={setCountTicket}
                        maxTicket={flight.countFreePlace}
                    />
                </div>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}


export default Flight;