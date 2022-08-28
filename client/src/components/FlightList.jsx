import React from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import FlightScheduleBusList from './FlightScheduleBusList'

const FlightList = ({
    flight, flightComfort, schedule, arrSchedule,
    status, changeStatus, is_admin, setScheduleWith,
    setScheduleTo, changeSchedule, setMon, setTuesd,
    setWend, setThu, setFri, setSat, setSund,
    createSchedule, createStatus
}) => {

    return (
        <div className='block-flight'>
            <div className='block-position-price'>
                <div>
                    <h1>{flight.startPosition}</h1>
                    <span><ImArrowRight2 /></span>
                    <h1>{flight.finishPosition}</h1>
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
            <FlightScheduleBusList
                flight={flight}
                schedule={schedule}
                arrSchedule={arrSchedule}
                status={status}
                changeStatus={changeStatus}
                is_admin={is_admin}
                setScheduleWith={setScheduleWith}
                setScheduleTo={setScheduleTo}
                changeSchedule={changeSchedule}
                setMon={setMon}
                setTuesd={setTuesd}
                setWend={setWend}
                setThu={setThu}
                setFri={setFri}
                setSat={setSat}
                setSund={setSund}
                createSchedule={createSchedule}
                createStatus={createStatus}
            />
            <div className='flight-description'>
                <h2>Інформація про рейс {flight.startPosition} - {flight.finishPosition}:</h2>
                <p>{flight.description}</p>
            </div>
        </div >
    )
}

export default FlightList;