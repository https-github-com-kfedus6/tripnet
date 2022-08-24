import React, { useEffect } from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'
import { useAction } from '../hooks/useAction';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const FormBuy = () => {
    const { id, countOld, countYoung } = useParams()
    const navigate = useNavigate()

    const { t } = useTranslation()

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
                        <span>{t('formBuy.passengers')}</span>
                    </div>
                    {ticketOld !== undefined ?
                        ticketOld.map(item => {
                            return (
                                <div key={item} className="item-old">
                                    <div className='title-item'>
                                        <span>{item}. {t('formBuy.adult')}</span>
                                    </div>
                                    <div className='item-inputs'>
                                        <div className='item-input-name'>
                                            <span>{t('formBuy.name')}</span>
                                            <input type="text" />
                                        </div>
                                        <div className='item-input-surename'>
                                            <span>{t('formBuy.surename')}</span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className='item-inputs margin'>
                            <div className='item-input-name'>
                                <span>{t('formBuy.name')}</span>
                                <input type="text" />
                            </div>
                            <div className='item-input-surename'>
                                <span>{t('formBuy.surename')}</span>
                                <input type="text" />
                            </div>
                        </div>
                    }
                    {ticketYoung !== undefined ?
                        ticketYoung.map(item => {
                            return (
                                <div key={item} className='item-young'>
                                    <div className='title-item'>
                                        <span>{item}. {t('formBuy.child')}</span>
                                    </div>
                                    <div className='item-inputs'>
                                        <div className='item-input-name'>
                                            <span>{t('formBuy.name')}</span>
                                            <input type="text" />
                                        </div>
                                        <div className='item-input-name'>
                                            <span>{t('formBuy.surename')}</span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='item-input-born'>
                                        <div>
                                            <span>{t('formBuy.date_born')}</span>
                                        </div>
                                        <div className='item-input-date-month-year'>
                                            <input type="text" placeholder='ДД' name='date' minLength='1' maxLength='2' required />
                                            <input type="text" placeholder='MM' name='month' minLength='1' maxLength='2' required />
                                            <input type="text" placeholder={t('formBuy.year')} name='year' minLength='4' maxLength='4' required />
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
                        <span>{t('formBuy.contacts')}</span>
                    </div>
                    <div className='from-block-input-number-email'>
                        <div className='item-input-name'>
                            <span>{t('formBuy.email')}</span>
                            <input type="email" />
                        </div>
                        <div className='item-input-name'>
                            <span>{t('formBuy.phone')}</span>
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
                        <span>{t('formBuy.payment')}</span>
                    </div>
                    <div className='input-card'>
                        <span>{t('formBuy.card')}</span>
                        <input type="text" placeholder='1234 5678 9012 3456' minLength='16' maxLength='16' />
                    </div>
                    <div className='input-month-year-cvc'>
                        <div>
                            <span>{t('formBuy.MM_YY')}</span>
                            <input type="text" placeholder='MM/YY' minLength='4' maxLength='4' />
                        </div>
                        <div>
                            <span>CVC</span>
                            <input type="text" placeholder='3 digits' minLength='3' maxLength='3' />
                        </div>
                    </div>
                    <div className='input-persone-card'>
                        <span>{t('formBuy.persone_card')}</span>
                        <input type="text" />
                    </div>
                    <hr />
                    <div className='buy-ticket'>
                        <span>{t('formBuy.price')} {sum}.00 UAH</span>
                        <button>{t('formBuy.button_buy')}</button>
                    </div>
                </div>
            </form>
        </div >

    )
}

export default FormBuy;