import React, { useState } from 'react'
import AirDatepicker from 'air-datepicker';
import ua from 'air-datepicker/locale/uk';
import ru from 'air-datepicker/locale/ru';
import 'air-datepicker/air-datepicker.css';
import PhoneInput from 'react-phone-input-2'
import { t } from 'i18next'

const FlightReserve = ({ flight }) => {

    const [dropdownCheckBack, setDropdowbCheckBack] = useState(false)
    const [dropdownCheck, setDropdowbCheck] = useState(false)
    const [sumYoung, setSumYoung] = useState(0)
    const [sumOld, setSumOld] = useState(1)
    const [sumYoungBack, setSumYoungBack] = useState(0)
    const [sumOldBack, setSumOldBack] = useState(1)
    const [checked, setChecked] = useState(false);

    const [value, setValue] = useState();

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const countOldResult = () => {
        if (sumOld === 1) {
            setSumOld(1)
        } else {
            setSumOld(sumOld - 1)
        }
    }

    const countYoungResult = () => {
        if (sumYoung === 0) {
            setSumYoung(0)
        } else {
            setSumYoung(sumYoung - 1)
        }
    }

    const countOldResultBack = () => {
        if (sumOldBack === 1) {
            setSumOldBack(1)
        } else {
            setSumOldBack(sumOldBack - 1)
        }
    }

    const countYoungResultBack = () => {
        if (sumYoungBack === 0) {
            setSumYoungBack(0)
        } else {
            setSumYoungBack(sumYoungBack - 1)
        }
    }

    new AirDatepicker('#date', localStorage.getItem('i18nextLng') === 'UA' ?
        {
            locale: ua,
        }
        :
        {
            locale: ru
        }
    )

    new AirDatepicker('#date-second', localStorage.getItem('i18nextLng') === 'UA' ?
        {
            locale: ua
        }
        :
        {
            locale: ru
        }
    )

    return (
        <div className='flight-block-message-reserve'>
            <div className={flight.currentFlight ? 'flight-block-reserve' : 'flight-block-reserve-none'}>
                <div className='flight-header-reserve'>
                    <b>Бронювання онлайн</b>
                </div>
                <div className='flight-contact-info'>
                    <span>Контактні дані</span>
                    <div className='reserve-input'>
                        <input
                            id='reserve-first'
                            type="text"
                            className='reserve-input-text'
                            placeholder=' '
                            autoComplete="off"
                        />
                        <label htmlFor='reserve-first' className='reserve-label-text'>Прізвище</label>
                    </div>
                    <div className='reserve-input'>
                        <input
                            id='reserve-second'
                            type="text"
                            className='reserve-input-text'
                            placeholder=' '
                            autoComplete="off"
                        />
                        <label htmlFor='reserve-second' className='reserve-label-text'>Ім'я</label>
                    </div>
                    <div className='reserve-input'>
                        <PhoneInput
                            className='react-input-phone'
                            international
                            country="ua"
                        />
                        {/* <input
                            id='reserve-third'
                            type="text"
                            className='reserve-input-text'
                            placeholder=' '
                            autoComplete="off"
                        />
                        <label htmlFor='reserve-third' className='reserve-label-text'>Телефон</label> */}
                    </div>
                    <div className='reserve-input'>
                        <input
                            id='reserve-fourth'
                            type="email"
                            className='reserve-input-text'
                            placeholder=' '
                            autoComplete="off"
                        />
                        <label htmlFor='reserve-fourth' className='reserve-label-text'>E-mail</label>
                    </div>
                </div>
                <div className='reserve-details'>
                    <span>Деталі рейсу</span>
                    <div className='reserve-dropdown-free-place'>
                        <div className='reserve-free-place'>
                            <img src={process.env.REACT_APP_API_URL + "users-silver.png"} alt="users" />
                            <span>{flight.countFreePlace} {t('flight.free_place')}</span>
                        </div>
                        <div className='dropdown-passengers'>
                            <div className='dropdown-select-passegers' onClick={() => dropdownCheck ? setDropdowbCheck(false) : setDropdowbCheck(true)}>
                                <input className='dropdown-passegers-input' type="text" id='passegers' placeholder=' ' value={dropdownCheck ? `${sumOld} ${t('flight.pass_old')}, ${sumYoung} дитина` : ''} disabled />
                                <label className='dropdown-passegers-text' htmlFor="passegers">{t('flight.passegers')}</label>
                                <label className='dropdown-icon-user'>
                                    <img src={process.env.REACT_APP_API_URL + 'users.png'} alt="passegers" />
                                </label>
                            </div>
                            <div className={dropdownCheck ? 'dropdown-list-passegers' : 'dropdown-reserve-none'}>
                                <div className='dropdown-list-item-passegers'>
                                    <div className='dropdown-list-item-passegers-text'>
                                        <span>{t('flight.older_15_years')}</span>
                                    </div>
                                    <div className='dropdown-list-item-passegers-count'>
                                        <div className='dropdown-list-item-passegers-minus-and-plus'>
                                            <img src={process.env.REACT_APP_API_URL + 'minuss.png'} alt="minus" onClick={() => countOldResult()} />
                                        </div>
                                        <div value={sumOld}>{sumOld}</div>
                                        <div className='dropdown-list-item-passegers-minus-and-plus'>
                                            <img src={process.env.REACT_APP_API_URL + 'plus.png'} alt="plus" onClick={() => setSumOld(sumOld + 1)} />
                                        </div>
                                    </div>
                                </div>
                                <div className='dropdown-list-item-passegers'>
                                    <div className='dropdown-list-item-passegers-text'>
                                        <span>{t('flight.younger_14_years')}</span>
                                    </div>
                                    <div className='dropdown-list-item-passegers-count'>
                                        <div className='dropdown-list-item-passegers-minus-and-plus'>
                                            {sumYoung >= 1
                                                ?
                                                <img src={process.env.REACT_APP_API_URL + 'minuss.png'} alt="minus" onClick={() => countYoungResult()} />
                                                :
                                                <img src={process.env.REACT_APP_API_URL + 'minus.png'} alt="minus" onClick={() => countYoungResult()} />
                                            }
                                        </div>
                                        <div value={sumYoung}>{sumYoung}</div>
                                        <div className='dropdown-list-item-passegers-minus-and-plus'>
                                            <img src={process.env.REACT_APP_API_URL + 'plus.png'} alt="plus" onClick={() => setSumYoung(sumYoung + 1)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form-input-date'>
                        <input id='date' type='text'
                            className='form-input-text-date'
                            placeholder=' '
                            autoComplete="off"
                        />
                        <label className='form-label-date' htmlFor='date'>Дата відправлення</label>
                        <label className='form-button-date'>
                            <img src={process.env.REACT_APP_API_URL + 'vector.png'} alt="date" />
                        </label>
                    </div>
                </div>
                <div className='reverse-reserve-details'>
                    <span className='reserve-reserve-details-text'>Зворотній рейс</span>
                    <div className='reverse-checkbox'>
                        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                        <span className='reverse-checkbox-text'>Забронювати зворотній рейс</span>
                    </div>
                    <div className={checked ? 'reserve-details' : 'reserve-none'}>
                        <div className='reserve-dropdown-free-place'>
                            <div className='reserve-free-place'>
                                <img src={process.env.REACT_APP_API_URL + "users-silver.png"} alt="users" />
                                <span>{flight.countFreePlace} {t('flight.free_place')}</span>
                            </div>
                            <div className='dropdown-passengers'>
                                <div className='dropdown-select-passegers' onClick={() => dropdownCheckBack ? setDropdowbCheckBack(false) : setDropdowbCheckBack(true)}>
                                    <input className='dropdown-passegers-input' type="text" id='passegers' placeholder=' ' value={dropdownCheckBack ? `${sumOldBack} ${t('flight.pass_old')}, ${sumYoungBack} дитина` : ''} disabled />
                                    <label className='dropdown-passegers-text' htmlFor="passegers">{t('flight.passegers')}</label>
                                    <label className='dropdown-icon-user'>
                                        <img src={process.env.REACT_APP_API_URL + 'users.png'} alt="passegers" />
                                    </label>
                                </div>
                                <div className={dropdownCheckBack ? 'dropdown-list-passegers' : 'dropdown-reserve-back-none'}>
                                    <div className='dropdown-list-item-passegers'>
                                        <div className='dropdown-list-item-passegers-text'>
                                            <span>{t('flight.older_15_years')}</span>
                                        </div>
                                        <div className='dropdown-list-item-passegers-count'>
                                            <div className='dropdown-list-item-passegers-minus-and-plus'>
                                                <img src={process.env.REACT_APP_API_URL + 'minuss.png'} alt="minus" onClick={() => countOldResultBack()} />
                                            </div>
                                            <div value={sumOldBack}>{sumOldBack}</div>
                                            <div className='dropdown-list-item-passegers-minus-and-plus'>
                                                <img src={process.env.REACT_APP_API_URL + 'plus.png'} alt="plus" onClick={() => setSumOldBack(sumOldBack + 1)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='dropdown-list-item-passegers'>
                                        <div className='dropdown-list-item-passegers-text'>
                                            <span>{t('flight.younger_14_years')}</span>
                                        </div>
                                        <div className='dropdown-list-item-passegers-count'>
                                            <div className='dropdown-list-item-passegers-minus-and-plus'>
                                                {sumYoungBack >= 1
                                                    ?
                                                    <img src={process.env.REACT_APP_API_URL + 'minuss.png'} alt="minus" onClick={() => countYoungResultBack()} />
                                                    :
                                                    <img src={process.env.REACT_APP_API_URL + 'minus.png'} alt="minus" onClick={() => countYoungResultBack()} />
                                                }
                                            </div>
                                            <div value={sumYoungBack}>{sumYoungBack}</div>
                                            <div className='dropdown-list-item-passegers-minus-and-plus'>
                                                <img src={process.env.REACT_APP_API_URL + 'plus.png'} alt="plus" onClick={() => setSumYoungBack(sumYoungBack + 1)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='form-input-date'>
                            <input id='date-second' type='text'
                                className='form-input-text-date'
                                placeholder=' '
                                autoComplete="off"
                            />
                            <label className='form-label-date' htmlFor='date-second'>Дата відправлення</label>
                            <label className='form-button-date'>
                                <img src={process.env.REACT_APP_API_URL + 'vector.png'} alt="date" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='reserve-btn'>
                    <span>{flight.price} грн</span>
                    <button>{t('modalbuy.btn-buy')}</button>
                </div>
            </div>
            <div className='flight-block-message'>
                <div className={flight.currentFlight ? 'flight-info-message-first' : 'flight-message-status'}>
                    <div className='flight-message-icon'>
                        <img src={process.env.REACT_APP_API_URL + 'info-blue.png'} alt='info' />
                    </div>
                    <div className='flight-message-text'>
                        <b>Зворотній рейс</b>
                        <span>
                            Інформація про зворотній рейс з’явиться у профілі користувача.
                            Для незареєстрованих користувачів, інформація про зворотній рейс буде відправлено як повідомлення на вказаний номер телефону.
                        </span>
                    </div>
                </div>
                <div className={flight.currentFlight ? 'flight-info-message-second' : 'flight-message-status'}>
                    <div className='flight-message-icon'>
                        <img src={process.env.REACT_APP_API_URL + 'info-blue.png'} alt='info' />
                    </div>
                    <div className='flight-message-text'>
                        <b>Оплата бронювання</b>
                        <span>
                            Рейс можна буде оплатити після підтвердження бронювання менеджером.
                        </span>
                    </div>
                </div>
                <div className={flight.currentFlight ? 'flight-message-status' : 'flight-info-message-thrid'}>
                    <div className='flight-message-icon'>
                        <img src={process.env.REACT_APP_API_URL + 'info.png'} alt='info' />
                    </div>
                    <div className='flight-message-text-thrid'>
                        <b>Неактуальний рейс</b>
                        <span>
                            Дата відправлення або ціна на цей рейс могли змінитися. Поточнюйте ці дані у менеджера за телефонами:
                            <br />
                            +38(056)491-23-21
                            <br />
                            +38(044)723-11-71
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightReserve;