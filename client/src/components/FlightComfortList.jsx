import React, { useState } from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { useSelector } from 'react-redux'

import { FaBus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'


const FlightComfortList = ({ flight, flightComfort, schedule }) => {
    const [statusBus, setStatusBus] = useState()
    const {language}=useSelector(state=>state.language);
    const changeStatus = (e) => {
        setStatusBus(e)
        console.log(statusBus)
    }


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
                            <div key={item.id} className='item-comfort'>
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
                    <span>Розклад дійсний з <strong>{schedule.scheduleWith}</strong> до <strong>{schedule.scheduleTo}</strong>.</span>
                </div>
                <div className='schedule-dates'>
                    <div className='schedule-word-time'>Час</div>
                    <div className='schedule-date'><strong>{schedule.monday}</strong></div>
                    <div className='schedule-date'><strong>{schedule.tuesday}</strong></div>
                    <div className='schedule-date'><strong>{schedule.wednesday}</strong></div>
                    <div className='schedule-date'><strong>{schedule.thursday}</strong></div>
                    <div className='schedule-date'><strong>{schedule.friday}</strong></div>
                    <div className='schedule-date'><strong>{schedule.suturday}</strong></div>
                    <div className='schedule-date'><strong>{schedule.sunday}</strong></div>
                </div>
                <div className='schedule-time-status'>
                    <div className='bus-time'>
                        <div>{flight.timeFlight}</div>
                        <div><strong>{flight.startTime} <BsArrowRight /> {flight.finishTime}</strong></div>
                    </div>
                    <div className='schedule-status'><button value={schedule.statusOne}><FaBus /></button></div>
                    <div className='schedule-status'><button value={schedule.statusTwo} ><FaBus /></button></div>
                    <div className='schedule-status'><button value={schedule.statusTree}><FaBus /></button></div>
                    <div className='schedule-status'><button value={schedule.statusFour}><IoClose /></button></div>
                    <div className='schedule-status'><button value={schedule.statusFive}><IoClose /></button></div>
                    <div className='schedule-status'><button value={schedule.statusSix}><FaBus /></button></div>
                    <div className='schedule-status'><button value={schedule.statusSeven}><FaBus /></button></div>
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