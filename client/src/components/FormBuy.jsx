import React, { useEffect } from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'
import { useAction } from '../hooks/useAction';
import { useSelector } from 'react-redux';

const FormBuy = () => {
    const { id, countOld, countYoung } = useParams()
    const navigate = useNavigate()

    const [ticketOld, setTicketOld] = useState()
    const [ticketYoung, setTicketYoung] = useState()
    const [sum, setSum] = useState(0)

    const { fetchGetFlight } = useAction()
    const { flight } = useSelector(state => state.flights)

    useEffect(() => {
        fetchGetFlight(id)
    }, [])

    useMemo(() => {
        if (countOld !== '0') {
            let result = []
            for (let i = 0; i < +countOld; i++) {
                result.push(i + 1)
            }
            setTicketOld(result)
        }

        if (countYoung !== '0') {
            let result = []
            for (let i = 0; i < +countYoung; i++) {
                result.push(i + 1)
            }
            setTicketYoung(result)
        }

        let allCount = +countOld + +countYoung

        if (allCount === 0) {
            setSum(flight.price)
        } else {
            setSum(flight.price * allCount)
        }

    }, [countOld, countYoung])

    return (
        <div className="container-forms">
            <div className='form-btn-back'>
                <div>
                    <IoIosArrowBack />
                    <button onClick={(e) => { e.preventDefault(); navigate(-1) }}>Назад</button>
                </div>
            </div>
            <form className='form-buy'>
                <div className='form-block-ticket'>
                    <div className='number-block'>
                        <div>
                            <span>1</span>
                        </div>
                        <span>Пасажири</span>
                    </div>
                    {ticketOld !== undefined ?
                        ticketOld.map(item => {
                            return (
                                <div key={item} className="item-old">
                                    <div className='title-item'>
                                        <span>{item}. Дорослий</span>
                                    </div>
                                    <div className='item-inputs'>
                                        <div className='item-input-name'>
                                            <span>Ім'я</span>
                                            <input type="text" />
                                        </div>
                                        <div className='item-input-surename'>
                                            <span>Прізвище</span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className='item-inputs margin'>
                            <div className='item-input-name'>
                                <span>Ім'я</span>
                                <input type="text" />
                            </div>
                            <div className='item-input-surename'>
                                <span>Прізвище</span>
                                <input type="text" />
                            </div>
                        </div>
                    }
                    {ticketYoung !== undefined ?
                        ticketYoung.map(item => {
                            return (
                                <div key={item} className='item-young'>
                                    <div className='title-item'>
                                        <span>{item}. Дитина</span>
                                    </div>
                                    <div className='item-inputs'>
                                        <div className='item-input-name'>
                                            <span>Ім'я</span>
                                            <input type="text" />
                                        </div>
                                        <div className='item-input-name'>
                                            <span>Прізвище</span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='item-input-born'>
                                        <div>
                                            <span>Дата народження</span>
                                        </div>
                                        <div className='item-input-date-month-year'>
                                            <input type="text" placeholder='ДД' name='date' minLength='1' maxLength='2' required />
                                            <input type="text" placeholder='MM' name='month' minLength='1' maxLength='2' required />
                                            <input type="text" placeholder='PPPP' name='year' minLength='4' maxLength='4' required />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <span></span>
                    }
                </div>
            </form >
            <form className='form-buy'>
                <div className='form-block-contact'>
                    <div className='number-block'>
                        <div>
                            <span>2</span>
                        </div>
                        <span>Контакти</span>
                    </div>
                    <div className='from-block-input-number-email'>
                        <div className='item-input-name'>
                            <span>Адреса ел. пошти</span>
                            <input type="email" />
                        </div>
                        <div className='item-input-name'>
                            <span>Номер телефону (необов'язково)</span>
                            <input type="tel" />
                        </div>
                    </div>
                </div >
            </form >
            <form className='form-buy'>
                <div className='form-block-bank'>
                    <div className='number-block'>
                        <div>
                            <span>3</span>
                        </div>
                        <span>Оплата</span>
                    </div>
                    <div className='input-card'>
                        <span>Номер картки</span>
                        <input type="text" placeholder='1234 5678 9012 3456' minLength='16' maxLength='16' />
                    </div>
                    <div className='input-month-year-cvc'>
                        <div>
                            <span>Термін дії</span>
                            <input type="text" placeholder='MM/YY' minLength='4' maxLength='4' />
                        </div>
                        <div>
                            <span>CVC</span>
                            <input type="text" placeholder='3 digits' minLength='3' maxLength='3' />
                        </div>
                    </div>
                    <div className='input-persone-card'>
                        <span>Власник картки</span>
                        <input type="text" />
                    </div>
                    <hr />
                    <div className='buy-ticket'>
                        <span>Усього (вкл. ПДВ) {sum}.00 UAH</span>
                        <button>Оплатити</button>
                    </div>
                </div>
            </form>
        </div >

    )
}

export default FormBuy;