import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAction } from '../hooks/useAction';

const FlightsItem = ({ item, sumOld, sumYoung, deleteFlight, limit, page }) => {
    const navigate = useNavigate()

    const [newStartPosition, setNewStartPosition] = useState('')
    const [newFinishPosition, setNewFinishPosition] = useState('')
    const [newStartDate, setNewStartDate] = useState('')
    const [newFinishDate, setNewFinishDate] = useState('')
    const [newStartTime, setNewStartTime] = useState('')
    const [newFinishTime, setNewFinishTime] = useState('')
    const [newTimeFlight, setNewTimeFllight] = useState('')
    const [newCountFreePlace, setNewCaountFreePlace] = useState('')
    const [newPrice, setNewPrice] = useState('')

    const [sum, setSum] = useState(0)
    const [check, setCheck] = useState(false)

    const { user } = useSelector(state => state)
    const { fetchDeleteFlight, fetchUpdateFlight } = useAction()

    useMemo(() => {
        let sum = +sumOld + +sumYoung

        if (sumOld === 1) {
            setSum(item.price)
        } else {
            return setSum(item.price * +sum)
        }

        if (sumYoung === 0) {
            setSum(item.price)
        } else {
            return setSum(item.price * +sum)
        }

    }, [sumOld, sumYoung])

    const changeFlight = (id) => {
        let formData = new FormData()
        formData.append('id', id)
        formData.append('price', newPrice)
        formData.append('startPosition', newStartPosition)
        formData.append('finishPosition', newFinishPosition)
        formData.append('startDate', newStartDate)
        formData.append('finishDate', newFinishDate)
        formData.append('startTime', newStartTime)
        formData.append('finishTime', newFinishTime)
        formData.append('timeFlight', newTimeFlight)
        formData.append('countFreePlace', newCountFreePlace)
        formData.append('limit', limit)
        formData.append('page', page)
        fetchUpdateFlight(formData)
        setCheck(false)
    }

    if (user.is_admin === '1') {
        return (
            <div className='item-flight'>
                {check === true
                    ?
                    <>
                        <div className='item-time'>
                            <span><input type='text' placeholder={item.startTime} onChange={(e) => setNewStartTime(e.target.value)}></input></span>
                            <span><input type='text' placeholder={item.timeFlight} onChange={(e) => setNewTimeFllight(e.target.value)}></input></span>
                            <span><input type='text' placeholder={item.finishTime} onChange={(e) => setNewFinishTime(e.target.value)}></input></span>
                        </div>
                        <div className='item-date'>
                            <span><input type='text' placeholder={item.startData} onChange={(e) => setNewStartDate(e.target.value)}></input></span>
                            <span><input type='text' placeholder={item.finishDate} onChange={(e) => setNewFinishDate(e.target.value)}></input></span>
                        </div>
                        <div className='item-position'>
                            <span><input type='text' placeholder={item.startPosition} onChange={(e) => setNewStartPosition(e.target.value)}></input></span>
                            <span><input type='text' placeholder={item.finishPosition} onChange={(e) => setNewFinishPosition(e.target.value)}></input></span>
                        </div>
                        <div className='btn-buy'>
                            <div>
                                <NavLink to={`/flight/${item.id}`}>Дізнатися більше про рейс!</NavLink>
                            </div>
                            <div className='free-place'>
                                <span>Залишилось всього <input type='text' placeholder={item.countFreePlace} onChange={(e) => setNewCaountFreePlace(e.target.value)}></input> місце!</span>
                            </div>
                            <div>
                                <input type='text' placeholder={sum + '.00'} onChange={(e) => setNewPrice(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='change-flight'>
                            <button onClick={() => changeFlight(item.id)}>Оновити</button>
                            <button onClick={() => setCheck(false)}>Не оновлювати</button>
                        </div>
                    </>
                    :
                    <>
                        <div className='admin-delete-flight'>
                            <button onClick={() => setCheck(true)}>Змінити</button>
                            <button onClick={() => deleteFlight(item.id)}>Видалити</button>
                        </div>
                        <div className='item-time'>
                            <span>{item.startTime}</span>
                            <span>{item.timeFlight}.</span>
                            <span>{item.finishTime}</span>
                        </div>
                        <div className='item-date'>
                            <span>{item.startData}</span>
                            <span>{item.finishDate}</span>
                        </div>
                        <div className='item-position'>
                            <span>{item.startPosition}</span>
                            <span>{item.finishPosition}</span>
                        </div>
                        <div className='btn-buy'>
                            <div>
                                <NavLink to={`/flight/${item.id}`}>Дізнатися більше про рейс!</NavLink>
                            </div>
                            <div className='free-place'>
                                <span>Залишилось всього {item.countFreePlace} місце!</span>
                            </div>
                            <div>
                                <button onClick={() => navigate(`/formBuy/${item.id}/${sumOld}/${sumYoung}`)}><div><FaShoppingCart /></div><span>{sum}.00 UAH</span></button>
                            </div>
                        </div>
                    </>
                }
            </div >
        )
    } else {
        return (
            <div className='item-flight'>
                <div className='item-time'>
                    <span>{item.startTime}</span>
                    <span>{item.timeFlight}.</span>
                    <span>{item.finishTime}</span>
                </div>
                <div className='item-date'>
                    <span>{item.startData}</span>
                    <span>{item.finishDate}</span>
                </div>
                <div className='item-position'>
                    <span>{item.startPosition}</span>
                    <span>{item.finishPosition}</span>
                </div>
                <div className='btn-buy'>
                    <div>
                        <NavLink to={`/flight/${item.id}`}>Дізнатися більше про рейс!</NavLink>
                    </div>
                    <div className='free-place'>
                        <span>Залишилось всього {item.countFreePlace} місце!</span>
                    </div>
                    <div>
                        <button onClick={() => navigate(`/formBuy/${item.id}/${sumOld}/${sumYoung}`)}><div><FaShoppingCart /></div><span>{sum}.00 UAH</span></button>
                    </div>
                </div>
            </div >
        )
    }
}

export default FlightsItem;