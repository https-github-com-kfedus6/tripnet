import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import { IoClose } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

import '../FlightOrders/flightOrders.css';

const FlightOrders = () => {
    const [isActive, setIsActive] = useState(null)

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

    if (flightOrders === null || Array.isArray(flightOrders) === false) {
        return <></>
    } else {
        return (
            <div className='order-container'>
                <div className="container-orders">
                    <div className='accordion-title-order'>
                        <h2>Orders</h2>
                    </div>
                    <div className="accordion-orders">
                        {flightOrders.map((item, i) => {
                            let status = item.status
                            if (status === null) {
                                status = 'Воброці'
                            } else if (status === false) {
                                status = <IoClose />
                            } else if (status === true) {
                                status = <BsCheckLg />
                            }
                            return (
                                <div key={item.id} className="accordion-item-order">
                                    <div className='accordion-header-order'>
                                        <button className='accordion-order-btn' onClick={() => toggle(i, item.flightId)} aria-expanded={isActive === i ? "true" : "false"}>
                                            <span className="accordion-title-order">12:12:20202</span>
                                            <span className="accordion-title-order">{item.authorName}</span>
                                            <span className="accordion-title-order">{item.phone}</span>
                                        </button>
                                        <div className='ss'>
                                            <span className='icon-order' aria-hidden="true">{status}</span>
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
                                                    <span><b>Кількість біетів:</b> {item.countTicket}</span>
                                                    <span><b>Ціна за рейс:</b> {flight.price}.00 UAH</span>
                                                    <span><b>Загальна сума:</b> {+flight.price * +item.countTicket}.00 UAH</span>
                                                </div>
                                                <div className='order-status-btn'>
                                                    <button onClick={() => changeStatusOrderTrue(item.id)}>Прийняти</button>
                                                    <button onClick={() => changeStatusOrderFalse(item.id)}>Відхилити</button>
                                                    <button><AiFillDelete /></button>
                                                </div>
                                            </>
                                        }

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
        )
    }
}

export default FlightOrders;