import React from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { useSelector } from 'react-redux'
import FlightScheduleBusList from './FlightScheduleBusList'

const FlightList = ({ flight, is_admin, setScheduleTo, setScheduleWith, status, changeStatus, changeSchedule }) => {
    const {language}=useSelector(state=>state.language);
    function createMarkup(text) { return {__html: text}; };
    console.log(flight.description[language]);
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
                <div className='flight-image'>
                    <img src={process.env.REACT_APP_API_URL + flight.image} alt={flight.finishPosition} />
                </div>
                <div className='items-comfort'>
                    {flight.params.map(img => {
                        return (
                            <div key={img.id} className='item-comfort'>
                                <div className={img.isWifi ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "isWiFi.png"} alt={img.isWifi} />
                                    <span>Wi-Fi</span>
                                </div>
                                <div className={img.isWC ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "isWC.png"} alt={img.isWC} />
                                    <span>wc</span>
                                </div>
                                <div className={img.is220V ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "is220v.png"} alt={img.is220V} />
                                    <span>220v</span>
                                </div>
                                <div className={img.isMultimedia ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "IsMultimedia.png"} alt={img.isMultimedia} />
                                    <span>Мультімедія</span>
                                </div>
                                <div className={img.isAirConditioning ? '' : 'image-status'}>
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
                <iframe src={flight.map} loading="lazy"></iframe>
            </div>
            <div dangerouslySetInnerHTML={createMarkup(flight.description[language])} className='flight-description'>

            </div>
        </div >
    )
}

export default FlightList;