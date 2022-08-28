import React from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { useSelector } from 'react-redux'

import { FaBus } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

const FlightComfortList = ({ flight, flightComfort, schedule, arrSchedule, status, changeStatus, is_admin, setScheduleWith, setScheduleTo, changeSchedule }) => {

    return (
        <div className='block-flight'>
            <div className='block-position-price'>
                <div>
                    <h1>{flight.startPosition[language]}</h1>
                    <span><ImArrowRight2 /></span>
                    <h1>{flight.finishPosition[language]}</h1>
                </div>
                <div>
                    <span>{flight.price}.00 UAH</span>
                </div>
            </div>
            <div className='block-comfort'>
                <div>
                    <h2>Комфорт рейса</h2>
                </div>
                <div className='items-comfort'>
                    {flightComfort.map(item => {
                        return (
                            <div key={item.id + item.title} className='item-comfort'>
                                <img src={process.env.REACT_APP_API_URL + item.image} alt="comfort" />
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='block-schedule'>
                <div className='schedule-with-to'>
                    <span>Розклад автобусів {flight.startPosition} - {flight.finishPosition}</span>
                    {is_admin
                        ?
                        <span>Розклад дійсний з
                            <input type="text" placeholder={schedule.scheduleWith}
                                onChange={(e) => setScheduleWith(e.target.value)} />
                            до
                            <input type="text" placeholder={schedule.scheduleTo}
                                onChange={(e) => setScheduleTo(e.target.value)}
                            />
                            <button onClick={changeSchedule}>Обновити</button>
                        </span>
                        :
                        <span>Розклад дійсний з <strong>{schedule.scheduleWith}</strong> до <strong>{schedule.scheduleTo}</strong>.</span>
                    }
                </div>
                <div>
                    {arrSchedule.map(item => {
                        return (
                            <table key={item.id + item.monday} className='table-date'>
                                <thead>
                                    <tr>
                                        <th>Час</th>
                                        <th>{item.monday}</th>
                                        <th>{item.tuesday}</th>
                                        <th>{item.wednesday}</th>
                                        <th>{item.thursday}</th>
                                        <th>{item.friday}</th>
                                        <th>{item.suturday}</th>
                                        <th>{item.sunday}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>
                                        <small>{flight.timeFlight}</small>
                                        <br />
                                        <div className='time-schedule'>
                                            <strong>{flight.startTime}</strong>
                                            <BsArrowRight />
                                            <strong>{flight.finishTime}</strong>
                                        </div>
                                    </td>
                                    {status.map(s => {
                                        if (is_admin) {
                                            return (
                                                <td key={s.id + "status"} className={s.status === true ? 'status-cursor' : 'status-cursor table-active'} onClick={() => changeStatus(s.id, s.status)}>{s.status ? <FaBus /> : <GrClose />}</td>
                                            )
                                        } else {
                                            return (
                                                <td key={s.id + "status"} className={s.status === true ? '' : 'table-active'}>{s.status ? <FaBus /> : <GrClose />}</td>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        )
                    })}
                </div>
            </div>
            <div className='flight-description'>
                <h2>Інформація про рейс {flight.startPosition[language]} - {flight.finishPosition[language]}:</h2>
                <p>{flight.description}</p>
            </div>
        </div >
    )
}

export default FlightComfortList;