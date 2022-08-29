import React from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import FlightScheduleBusList from './FlightScheduleBusList'

const FlightList = ({ flight, is_admin, setScheduleTo, setScheduleWith, status, changeStatus, changeSchedule }) => {

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
                <div className='flight-image'>
                    <img src={process.env.REACT_APP_API_URL + flight.image} alt={flight.finishPosition} />
                </div>
                <div className='items-comfort'>
                    {flight.params.map(img => {
                        return (
                            <div className='item-comfort'>
                                <div className={img.isWifi ? <></> : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "isWiFi.png"} alt={img.isWifi} />
                                    <span>Wi-Fi</span>
                                </div>
                                <div className={img.isWifi ? <></> : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "isWC.png"} alt={img.isWC} />
                                    <span>wc</span>
                                </div>
                                <div className={img.isWifi ? <></> : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "is220v.png"} alt={img.is220V} />
                                    <span>220v</span>
                                </div>
                                <div className={img.isWifi ? <></> : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "IsMultimedia.png"} alt={img.isMultimedia} />
                                    <span>Мультімедія</span>
                                </div>
                                <div className={img.isWifi ? <></> : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "IsAirConditioning.png"} alt={img.isAirConditioning} />
                                    <span>Кондиціонер</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <FlightScheduleBusList
                flight={flight}
                is_admin={is_admin}
                setScheduleTo={setScheduleTo}
                setScheduleWith={setScheduleWith}
                status={status}
                changeStatus={changeStatus}
                changeSchedule={changeSchedule}
            />
            <div className='flight-maps'>
                <h2>Карта маршута</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2595335.5208618953!2d25.018263378681826!3d50.561931118320025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsA!3m2!1d49.839683!2d24.029716999999998!4m5!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCw!3m2!1d50.4501!2d30.5234!5e0!3m2!1suk!2suk!4v1661789435169!5m2!1suk!2suk" loading="lazy"></iframe>
            </div>
            <div className='flight-description'>
                <h2>Інформація про рейс {flight.startPosition} - {flight.finishPosition}:</h2>
                <p>{flight.description}</p>
            </div>
        </div >
    )
}

export default FlightList;