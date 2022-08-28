import React from 'react'
import { FaBus } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

const FlightScheduleBusList = ({
    flight, schedule, arrSchedule,
    status, changeStatus, is_admin, setScheduleWith,
    setScheduleTo, changeSchedule, setMon, setTuesd,
    setWend, setThu, setFri, setSat, setSund,
    createSchedule, createStatus
}) => {

    if (schedule === null) {
        return (
            <div className='block-schedule'>
                <div className='schedule-with-to'>
                    <span>Розклад автобусів {flight.startPosition} - {flight.finishPosition}</span>
                    {is_admin
                        ?
                        <span>Розклад дійсний з
                            <input className='create-date' type="text" placeholder="22.09.2022"
                                onChange={(e) => setScheduleWith(e.target.value)} />
                            до
                            <input className='create-date' type="text" placeholder="22.10.2022"
                                onChange={(e) => setScheduleTo(e.target.value)}
                            />
                        </span>
                        :
                        <span>Розклад дійсний з <strong>ДД.ММ.РРРР</strong> до <strong>ДД.ММ.РРРР</strong>.</span>
                    }
                </div>
                <div>
                    <table className='table-date'>
                        <thead>
                            <tr>
                                <th>Час</th>
                                <th><input className='create-day' type="text" placeholder='Пн' onChange={(e) => setMon(e.target.value)} /></th>
                                <th><input className='create-day' type="text" placeholder='Вт' onChange={(e) => setTuesd(e.target.value)} /></th>
                                <th><input className='create-day' type="text" placeholder='Ср' onChange={(e) => setWend(e.target.value)} /></th>
                                <th><input className='create-day' type="text" placeholder='Чт' onChange={(e) => setThu(e.target.value)} /></th>
                                <th><input className='create-day' type="text" placeholder='Пт' onChange={(e) => setFri(e.target.value)} /></th>
                                <th><input className='create-day' type="text" placeholder='Сб' onChange={(e) => setSat(e.target.value)} /></th>
                                <th><input className='create-day' type="text" placeholder='Нд' onChange={(e) => setSund(e.target.value)} /></th>
                                <th><button onClick={createSchedule}>Создати</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                <small>{flight.timeFlight}</small>
                                <br />
                                <strong>{flight.startTime}</strong>
                                <BsArrowRight />
                                <strong>{flight.finishTime}</strong>
                            </td>
                            <td><button onClick={createStatus}>Создати</button></td>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    } else {
        return (
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
                                        <strong>{flight.startTime}</strong>
                                        <BsArrowRight />
                                        <strong>{flight.finishTime}</strong>
                                    </td>
                                    {Object.keys(status).length <= 7
                                        ?
                                        <td><button onClick={createStatus}>Создати</button></td>
                                        :
                                        status.map(s => {
                                            if (is_admin) {
                                                return (
                                                    <td key={s.id + "status"} className={s.status === true ? 'status-cursor' : 'status-cursor table-active'} onClick={() => changeStatus(s.id, s.status)}>{s.status ? <FaBus /> : <GrClose />}</td>
                                                )
                                            } else {
                                                return (
                                                    <td key={s.id + "status"} className={s.status === true ? '' : 'table-active'}>{s.status ? <FaBus /> : <GrClose />}</td>
                                                )
                                            }
                                        })
                                    }

                                </tbody>
                            </table>
                        )
                    })}
                </div>
            </div >
        )
    }
}

export default FlightScheduleBusList;