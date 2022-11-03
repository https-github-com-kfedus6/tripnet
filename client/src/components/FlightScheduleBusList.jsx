import React from 'react'
import { useSelector } from 'react-redux'
import { t } from 'i18next'

const FlightScheduleBusList = ({ flight, is_admin, setScheduleTo, setScheduleWith, status, changeStatus, changeSchedule }) => {

    const { language } = useSelector(state => state.language);

    return (
        <div className='block-schedule'>
            <div className='schedule-date-with-to'>
                <b>Розклад</b>
                {flight.schefule.map(item => {
                    if (is_admin) {
                        return (
                            <div key={item.id}>
                                <p>{t("flight.schedule_valid_with")}
                                    <input type="text" placeholder={item.scheduleWith}
                                        className='create-date'
                                        onChange={(e) => setScheduleWith(e.target.value)}
                                    />
                                    по
                                    <input type="text" placeholder={item.scheduleTo}
                                        className='create-date'
                                        onChange={(e) => setScheduleTo(e.target.value)}
                                    />
                                    <button className='change-date' onClick={() => changeSchedule(item.id)}>Обновити</button>
                                </p>
                            </div>
                        )
                    } else {
                        return (
                            <span key={item.id}>{t("flight.schedule_valid_with")} <strong>{item.scheduleWith}</strong> по <strong>{item.scheduleTo}.</strong></span>
                        )
                    }
                })}
            </div>
            <div className='block-schedule-table'>
                <div className='schedule-table-day'>
                    {flight.schefule.map(day => {
                        return (
                            <div key={day.id} className='table-day' >
                                <div>
                                    <span>{day.monday}</span>
                                </div>
                                <div>
                                    <span>{day.tuesday}</span>
                                </div>
                                <div>
                                    <span>{day.wednesday}</span>
                                </div>
                                <div>
                                    <span>{day.thursday}</span>
                                </div>
                                <div>
                                    <span>{day.friday}</span>
                                </div>
                                <div>
                                    <span>{day.suturday}</span>
                                </div>
                                <div>
                                    <span>{day.sunday[language]}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='table-status'>
                    {status.map((s, id) => {
                        if (is_admin) {
                            return (
                                <div key={s.id}><button /* onClick={() => changeStatus(day.id, s.id, s.status)} */></button></div>
                            )
                        } else {
                            return (
                                <div key={s.id} className='table-day-status-number'>
                                    <div className={s.status === true ? 'table-day-status' : 'table-day-number'}>
                                        <span >{id + 1}</span>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className='schedule-time-with-to'>
                <span>Орієнтовний час у дорозі: {flight.timeFlight.split("//")[language]}</span>
                <span>Час відправлення: {flight.startTime}</span>
                <span>Час прибуття: {flight.finishTime}</span>
            </div>
        </div>
    )
}

export default FlightScheduleBusList;