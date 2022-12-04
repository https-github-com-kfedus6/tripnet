import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import { IoClose } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../FlightOrders/flightOrders.css';
import { getPageCount } from '../../utils/page';

const FlightOrders = () => {
    const [isActive, setIsActive] = useState(null)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(undefined)

    const { t } = useTranslation()
    const { language } = useSelector(state => state.language);
    const { flightOrders } = useSelector(state => state.order)
    const { flight } = useSelector(state => state.flights)
    const { getFlightOrder, putFlightOrder, deleteFlightOrder, fetchGetFlight } = useAction()

    useEffect(() => {
        getFlightOrder({ page: page, limit: limit })
    }, [page, limit])

    useEffect(() => {
        setTotalCount(getPageCount(flightOrders.count, limit))
    }, [flightOrders])

    const toggle = (i, id) => {
        if (isActive == i) {
            return setIsActive(null);
        }
        console.log(i)
        setIsActive(i);
        fetchGetFlight(id);
    }

    const [countTicket, setCountTicket] = useState(1);

    const changeStatusOrderTrue = (id) => {
        let status = true
        putFlightOrder(status, id, page, limit, countTicket)
    }

    const changeStatusOrderFalse = (id) => {
        let status = false
        putFlightOrder(status, id, page, limit, countTicket)
    }

    const deleteOrder = (id) => {
        deleteFlightOrder(id);
        setPage(1);
        setIsActive(false);
    }
    useEffect(() => {

    }, [flightOrders])

    const handleChange = (event, value) => {
        setPage(value)
    }

    if (Array.isArray(flightOrders)) {
        return <></>
    } else {
        return (
            <div className='order-container'>
                <div className="container-orders">
                    <div className='bredcrumbs-flights'>
                        <div>
                            <NavLink to="/">{t("header.first_link")}</NavLink>
                        </div>
                        <div>
                            <img src={process.env.REACT_APP_API_URL + 'chevron-right.png'} alt="right" />
                        </div>
                        <div>
                            <span>
                                {t('order.title')}
                            </span>
                        </div>
                    </div>
                    <div className='accordion-title-order'>
                        <b>{t('order.title')}</b>
                    </div>
                    <div className="accordion-orders">
                        {flightOrders.rows.map((item, i) => {
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
                                        <button className='accordion-order-btn' onClick={() => { toggle(i, item.flightId); setCountTicket(item.countTicket) }} aria-expanded={isActive === i ? "true" : "false"}>
                                            <span className="accordion-title-order">{dateDay}.{date[1]}.{date[0]} {time}</span>
                                            <span className="accordion-title-order">{item.authorName}</span>
                                            <span className="accordion-title-order">{item.phone}</span>
                                        </button>
                                        <div>
                                            <span className='icon-order' aria-hidden="true">
                                                {item.status === null ? status : item.status === false ? <span>{t("account.canceled")}</span> : <span>{t("account.accepted")}</span>}
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
                                                    <div className='order-street-position'>
                                                        <div>
                                                            <span>{flight.streetStartPosition[language]}</span>
                                                        </div>
                                                        <div>
                                                            <span className='order-street-finish'>{flight.streetFinishPosition[language]}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span>{flight.startDate}</span>
                                                        <span>{flight.finishDate}</span>
                                                    </div>
                                                    <div>
                                                        <span>{flight.startTime}</span>
                                                        <span>{flight.finishTime}</span>
                                                    </div>
                                                </div>
                                                <div className='order-flight-ticket'>
                                                    <span><b>{t('order.ticket')}:</b> <input value={countTicket} onChange={(e) => setCountTicket(e.target.value)} type={"number"} /></span>
                                                    <span><b>{t('order.ticket_remained')}:</b> {flight.countFreePlace}</span>
                                                    <span><b>Дата:</b> {item.date}</span>
                                                    <span><b>{t('order.price')}:</b> {flight.price}.00 UAH</span>
                                                    <span><b>{t('order.allPrice')}:</b> {+flight.price * +item.countTicket}.00 UAH</span>
                                                </div>
                                                <div className='order-status-btn'>
                                                    <div>
                                                        <button onClick={() => { if (item.status == null || item.status == false) changeStatusOrderTrue(item.id) }}>{t('order.check')}</button>
                                                        <button onClick={() => { if (item.status == null || item.status == true) changeStatusOrderFalse(item.id) }}>{t('order.close')}</button>
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
                    {totalCount == undefined || isNaN(totalCount) ? <></> :
                        <div className='pagination-order'>
                            <Stack spacing={1}>
                                <Pagination count={totalCount} page={page} onChange={handleChange} shape="rounded" color="primary" />
                            </Stack>
                        </div>}
                </div>

            </div >
        )
    }
}

export default FlightOrders;