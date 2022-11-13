import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAction } from '../hooks/useAction';
import { useTranslation } from 'react-i18next';

const FlightsItem = ({ item, sumOld, sumYoung, deleteFlight, limit, page, openModal }) => {
    const { t } = useTranslation()

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
    const { fetchUpdateFlight } = useAction()

    const { language } = useSelector(state => state.language);

    useEffect(() => {
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
        let formData = new FormData();
        formData.append('id', id);
        formData.append('price', newPrice == "" ? item.price : newPrice);
        formData.append('startPosition', newStartPosition == "" ? item.startPosition.join("//") : newStartPosition);
        formData.append('finishPosition', newFinishPosition == "" ? item.finishPosition.join("//") : newFinishPosition);
        formData.append('startDate', newStartDate == "" ? item.startDate : newStartDate);
        formData.append('finishDate', newFinishDate == "" ? item.finishDate : newFinishDate);
        formData.append('startTime', newStartTime == "" ? item.startTime : newStartTime);
        formData.append('finishTime', newFinishTime == "" ? item.finishTime : newFinishTime);
        formData.append('timeFlight', newTimeFlight == "" ? item.timeFlight : newTimeFlight);
        formData.append('countFreePlace', newCountFreePlace == "" ? item.countFreePlace : newCountFreePlace);
        formData.append('limit', limit);
        formData.append('page', page);
        fetchUpdateFlight(formData)
        setCheck(false)
    }

    /*if (user.is_admin) {
        return (
            <div className='item-flight'>
                {check === true
                    ?
                    <>
                        <div className='item-blocks'>
                            <div className='item-position'>
                                <span><input type='text' placeholder={item.startPosition.join("//")} onChange={(e) => setNewStartPosition(e.target.value)}></input></span>
                                <span><input type='text' placeholder={item.finishPosition.join("//")} onChange={(e) => setNewFinishPosition(e.target.value)}></input></span>
                            </div>
                            <div className='item-time'>
                                <div className='item-start-time'>
                                    <span><input type='text' placeholder={item.startTime} onChange={(e) => setNewStartTime(e.target.value)}></input></span>
                                    <span><TbBus /></span>
                                </div>
                                <div className='item-border'></div>
                                <div className='item-flight-time'><span><BiTimeFive /></span>  <span><input type='text' placeholder={item.timeFlight} onChange={(e) => setNewTimeFllight(e.target.value)}></input></span></div>
                                <div className='item-border'></div>
                                <div className='item-finish-time'>
                                    <span><GiPositionMarker /></span>
                                    <span><input type='text' placeholder={item.finishTime} onChange={(e) => setNewFinishTime(e.target.value)}></input></span>
                                </div>
                            </div>
                            <div className='item-date'>
                                <span><input type='text' placeholder={item.startDate} onChange={(e) => setNewStartDate(e.target.value)}></input></span>
                                <span><input type='text' placeholder={item.finishDate} onChange={(e) => setNewFinishDate(e.target.value)}></input></span>
                            </div>
                        </div>
                        <div className='btn-buy'>
                            <div>
                                <NavLink to={`/flight/${item.startPosition[language]}-${item.finishPosition[language]}/${item.id}`}>{t('flight.info_flight')}!</NavLink>
                            </div>
                            <div className='free-place'>
                                <span><FaUser /> <input type='number' placeholder={item.countFreePlace} onChange={(e) => setNewCaountFreePlace(e.target.value)}></input>{t('flight.free_place')}</span>
                            </div>
                            <div>
                                <input type='number' placeholder={sum} onChange={(e) => setNewPrice(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='change-flight'>
                            <button onClick={() => changeFlight(item.id)}>{t('flight.update')}</button>
                            <button onClick={() => setCheck(false)}>{t('flight.no_update')}</button>
                        </div>
                    </>
                    :
                    <>
                        <div className='admin-delete-flight'>
                            <button onClick={() => setCheck(true)}>{t('flight.change')}</button>
                            <button onClick={() => deleteFlight(item.id)}>{t('flight.delete')}</button>
                        </div>
                        <div className='item-blocks'>
                            <div className='item-position'>
                                <span>{item.startPosition[language]}</span>
                                <span>{item.finishPosition[language]}</span>
                            </div>
                            <div className='item-street-position'>
                                <div>
                                    <small>({item.streetStartPosition[language]})</small>
                                </div>
                                <div>
                                    <small className='item-street-finish'>({item.streetFinishPosition[language]})</small>
                                </div>
                            </div>
                            <div className='item-time'>
                                <div className='item-start-time'>
                                    <span>{item.startTime}</span>
                                    <span><TbBus /></span>
                                </div>
                                <div className='item-border'></div>
                                <div className='item-flight-time'><span><BiTimeFive /></span> <span>{item.timeFlight.split("//")[language]}.</span></div>
                                <div className='item-border'></div>
                                <div className='item-finish-time'>
                                    <span><GiPositionMarker /></span>
                                    <span>{item.finishTime}</span>
                                </div>
                            </div>
                            <div className='item-date'>
                                <span>{item.startDate}</span>
                                <span>{item.finishDate}</span>
                            </div>
                        </div>
                        <div className='btn-buy'>
                            <div className='btn-flight-info'>
                                <NavLink to={`/flight/${item.startPosition[language]}-${item.finishPosition[language]}/${item.id}`}>{t('flight.info_flight')}!</NavLink>
                            </div>
                            <div className='free-place'>
                                <span><FaUser /> {item.countFreePlace} {t('flight.free_place')}</span>
                            </div>
                            <div className='btn-buy-modal'>
                                <div className='price-block'>
                                    <span>{sum} UAH</span>
                                </div>
                                <div>
                                    <button onClick={() => openModal(item.id)}>
                                        {t('modalbuy.btn-buy')}
                                    </button>
                                </div>
                            </div>
                        </div >
                    </>
                }
            </div >
        )
    } */
    return (
        <div className='item-flight'>
            <div className='item-blocks'>
                <div className='item-info-group' >
                    <div className='item-block-position' >
                        <div className='item-position'>
                            <div className='item-street-start-finish'>
                                <div>
                                    <img src={process.env.REACT_APP_API_URL + item.flagStart} alt="flag" />
                                    <span>{item.startPosition[language]}</span>
                                </div>
                                <span>{item.streetStartPosition[language]}</span>
                            </div>
                            <div className='item-time-date'>
                                <span>{item.startTime}</span>
                                <span>{item.startDate}</span>
                            </div>
                        </div>
                        <div className='item-position'>
                            <div className='item-street-start-finish'>
                                <div>
                                    <img src={process.env.REACT_APP_API_URL + item.flagFinish} alt="flag" />
                                    <span>{item.finishPosition[language]}</span>
                                </div>
                                <span>{item.streetFinishPosition[language]}</span>
                            </div>
                            <div className='item-time-date'>
                                <span>{item.finishTime}</span>
                                <span>{item.finishDate}</span>
                            </div>
                        </div>
                        <div className='item-block-btn-price'>
                            <span>{sum} грн</span>
                            {
                                item.currentFlight ?
                                    <button className='item-button-active' onClick={() => openModal(item.id)}>
                                        {t('modalbuy.btn-buy')}
                                    </button>
                                    :
                                    <button className='item-button-disabled'>
                                        {t('modalbuy.btn-buy')}
                                    </button>
                            }
                        </div>
                        <div className='item-btn-info-flight item-btn-info-flight-none'>
                            <NavLink to={`/flight/${item.startPosition[language]}-${item.finishPosition[language]}/${item.id}`}>{t('flight.info_flight')}</NavLink>
                        </div>
                    </div>
                </div>
                <div className='item-block-info'>
                    <div className='item-block-info-flight'>
                        <div className='item-block-reverse-free-place'>
                            {
                                item.currentFlight ?
                                    <div className='item-info-true'>
                                        <img src={process.env.REACT_APP_API_URL + "reverse.png"} alt="reverse" />
                                        <span>{t("flight.reverse_flight")}</span>
                                    </div>
                                    :
                                    <div className='item-info-false'>
                                        <img src={process.env.REACT_APP_API_URL + "info.png"} alt="info" />
                                        <span>{t("flight.info_icon_flight")}</span>
                                    </div>
                            }
                            <div>
                                <img src={process.env.REACT_APP_API_URL + "users-silver.png"} alt="users" />
                                <span>{item.countFreePlace} {t('flight.free_place')}</span>
                            </div>
                        </div>
                        <div className='item-btn-info-flight item-btn-info-flight-none-second'>
                            <NavLink to={`/flight/${item.startPosition[language]}-${item.finishPosition[language]}/${item.id}`}>{t('flight.info_flight')}</NavLink>
                        </div>
                    </div>
                </div>
                {user.is_admin
                    ?
                    <div className='flight-block-update-admin'>
                        <div className='flight-block-update-admin-btn'>
                            <div className='flight-block-update-admin-btns'>
                                <button>{item.currentFlight ? 'Не актуальний' : 'Aктуальний'}</button>
                                <NavLink to={`/flightUpdate/${item.id}`}>
                                    <button>{t('flight.update')}</button>
                                </NavLink>
                                <button onClick={() => deleteFlight(item.id)}>{t('flight.delete')}</button>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        </div >
    )
}

export default FlightsItem;