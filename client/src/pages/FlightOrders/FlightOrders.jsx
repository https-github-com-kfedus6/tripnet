import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import { IoClose } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import '../FlightOrders/flightOrders.css';

const FlightOrders = () => {
    const [isActive, setIsActive] = useState(null)
    const [limit, setLimit] = useState(3)
    const [page, setPage] = useState(1)


    const { t } = useTranslation()

    const { language } = useSelector(state => state.language);
    const { flightOrders } = useSelector(state => state.order)
    const { flight } = useSelector(state => state.flights)
    const { getFlightOrder, putFlightOrder, deleteFlightOrder, fetchGetFlight } = useAction()

    useEffect(() => {
        getFlightOrder()
    }, [])

    const toggle = (i, id) => {
        if (isActive == i) {
            return setIsActive(null)
        }
        setIsActive(i)
        fetchGetFlight(id)
    }

    const changeStatusOrderTrue = (id) => {
        let status = true
        putFlightOrder(status, id)
    }

    const changeStatusOrderFalse = (id) => {
        let status = false
        putFlightOrder(status, id)
    }

    const deleteOrder = (id) => {
        deleteFlightOrder(id)
    }

    const handleChange = (event, value) => {
        setPage(value)
    }

    console.log(flightOrders)

    if (!Array.isArray(flightOrders)) {
        return <></>
    } else {
        return (
            <div className='order-container'>
                <div className="container-orders">
                    <div className='accordion-title-order'>
                        <h2>{t('order.title')}</h2>
                    </div>
                    <div className="accordion-orders">
                        {flightOrders.map((item, i) => {
                            let date = item.createdAt.split('-')
                            let dateDay = date[2]
                            dateDay = dateDay.slice(0, 2)
                            let time = date[2].slice(3, 8)

                            let status = item.status
                            if (status === null) {
                                status = t('order.status')
                            }
                            return (
                                <div key={item.id} className="accordion-item-order">
                                    <div className='accordion-header-order'>
                                        <button className='accordion-order-btn' onClick={() => toggle(i, item.flightId)} aria-expanded={isActive === i ? "true" : "false"}>
                                            <span className="accordion-title-order">{dateDay}.{date[1]}.{date[0]} {time}</span>
                                            <span className="accordion-title-order">{item.authorName}</span>
                                            <span className="accordion-title-order">{item.phone}</span>
                                        </button>
                                        <div>
                                            <span className='icon-order' aria-hidden="true">
                                                {item.status === null ? status : item.status === false ? <span className='order-iconc-close'><IoClose /></span> : <span className='order-iconc-check'><BsCheckLg /></span>}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={isActive === i ? 'accordion-content-order show' : 'accordion-content-order'}>
                                        {flight.length === 0
                                            ?
                                            <></>
                                            :
                                            <>
                                                <div className='order-flight-pdt'>
                                                    <div>
                                                        <span>{flight.startPosition[language]}</span>
                                                        <span>{flight.finishPosition[language]}</span>
                                                    </div>
                                                    <div>
                                                        <span>{flight.startData}</span>
                                                        <span>{flight.finishDate}</span>
                                                    </div>
                                                    <div>
                                                        <span>{flight.startTime}</span>
                                                        <span>{flight.finishTime}</span>
                                                    </div>
                                                </div>
                                                <div className='order-flight-ticket'>
                                                    <span><b>{t('order.ticket')}:</b> {item.countTicket}</span>
                                                    <span><b>{t('order.price')}:</b> {flight.price}.00 UAH</span>
                                                    <span><b>{t('order.allPrice')}:</b> {+flight.price * +item.countTicket}.00 UAH</span>
                                                </div>
                                                <div className='order-status-btn'>
                                                    <div>
                                                        <button onClick={() => changeStatusOrderTrue(item.id)}>{t('order.check')}</button>
                                                        <button onClick={() => changeStatusOrderFalse(item.id)}>{t('order.close')}</button>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => deleteOrder(item.id)}><AiFillDelete /></button>
                                                    </div>
                                                </div>
                                            </>
                                        }

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Stack spacing={2}>
                    <Pagination count={10} page={page} onChange={handleChange} />
                </Stack>
            </div >
        )
    }
}

export default FlightOrders;