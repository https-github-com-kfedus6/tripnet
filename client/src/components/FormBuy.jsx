import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormBuy = () => {
    const { countOld, countYoung } = useParams()
    const navigate = useNavigate()

    const [ticketOld, setTicketOld] = useState()
    const [ticketYoung, setTicketYoung] = useState()

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

    }, [countOld, countYoung])

    return (
        <div className="container-forms">
            <form className='form-buy'>
                <div className='form-btn-back'>
                    <button onClick={(e) => { e.preventDefault(); navigate(-1) }}>Назад</button>
                </div>
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
            <form>
                <div>
                    <div className='number-block'>
                        <div>
                            <span>2</span>
                        </div>
                        <span>Контакти</span>
                    </div>
                </div>
            </form>
            <form>
                <div>
                    <div className='number-block'>
                        <div>
                            <span>3</span>
                        </div>
                        <span>Оплата</span>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default FormBuy;