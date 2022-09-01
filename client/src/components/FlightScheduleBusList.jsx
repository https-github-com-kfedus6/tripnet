import React from 'react'
import { FaBus } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { useSelector } from 'react-redux'

const FlightScheduleBusList = ({ flight, is_admin, setScheduleTo, setScheduleWith, status, changeStatus, changeSchedule }) => {
    const { language } = useSelector(state => state.language);
    console.log(flight)
    return (
        <div className='block-schedule'>
            <div className='schedule-with-to'>
                <span>Розклад автобусів {flight.startPosition[language]} - {flight.finishPosition[language]}</span>
                {flight.schefule.map(item => {
                    if (is_admin) {
                        return (
                            <div key={item.id}>
                                <span>Розклад дійсний з
                                    <input type="text" placeholder={item.scheduleWith}
                                        className='create-date'
                                        onChange={(e) => setScheduleWith(e.target.value)}
                                    />
                                    до
                                    <input type="text" placeholder={item.scheduleTo}
                                        className='create-date'
                                        onChange={(e) => setScheduleTo(e.target.value)}
                                    />
                                    <button className='change-date' onClick={() => changeSchedule(item.id)}>Обновити</button>
                                </span>
                            </div>
                        )
                    } else {
                        return (
                            <div key={item.id}><span>Розклад дійсний з <strong>{item.scheduleWith}</strong> до <strong>{item.scheduleTo}</strong>.</span></div>
                        )
                    }
                })
                }
            </div>
            <div>
                {flight.schefule.map(day => {
                    return (
                        <div key={day.id}>
                            <table table className='table-date' >
                                <thead>
                                    <tr>
                                        <th>Час</th>
                                        <th>{day.monday}</th>
                                        <th>{day.tuesday}</th>
                                        <th>{day.wednesday}</th>
                                        <th>{day.thursday}</th>
                                        <th>{day.friday}</th>
                                        <th>{day.suturday}</th>
                                        <th>{day.sunday[language]}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>
                                        <small>{flight.timeFlight.split("//")[language]}</small>
                                        <br />
                                        <strong>{flight.startTime}</strong>
                                        <BsArrowRight />
                                        <strong>{flight.finishTime}</strong>
                                    </td>
                                    {status.map(s => {
                                        if (is_admin) {
                                            return (
                                                <td key={s.id} className='status-btn'><button onClick={() => changeStatus(day.id, s.id, s.status)}>{s.status ? <FaBus /> : <GrClose />}</button></td>
                                            )
                                        } else {
                                            return (
                                                <td key={s.id} className={s.status ? '' : 'status-active'}>{s.status ? <FaBus /> : <GrClose />} </td>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default FlightScheduleBusList;