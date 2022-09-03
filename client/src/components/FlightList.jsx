import React from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { useSelector } from 'react-redux'
import FlightScheduleBusList from './FlightScheduleBusList'

const FlightList = ({ flight, is_admin, setScheduleTo, setScheduleWith, status, changeStatus, changeSchedule }) => {
    const { language } = useSelector(state => state.language);

    function createMarkup(text) { return { __html: text }; };
    
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
                {flight.image==null?<></>:
                <div className='flight-image'>
                    <img src={process.env.REACT_APP_API_URL + flight.image} alt={flight.finishPosition} />
                </div>}
                <div className='items-comfort'>
                    {flight.params.map(img => {
                        return (
                            <div key={img.id} className='item-comfort'>
                                <div className={img.isWifi ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "isWiFi.png"} />
                                    <span>Wi-Fi</span>
                                </div>
                                <div className={img.isWC ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "isWC.png"}/>
                                    <span>wc</span>
                                </div>
                                <div className={img.is220V ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "is220v.png"} />
                                    <span>220v</span>
                                </div>
                                <div className={img.isMultimedia ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "IsMultimedia.png"}/>
                                    <span>Мультімедія</span>
                                </div>
                                <div className={img.isAirConditioning ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "IsAirConditioning.png"}/>
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
            <div className='flight-description'>
                <h2>Інформація про рейс {flight.startPosition[language]} - {flight.finishPosition[language]}:</h2>
                <p dangerouslySetInnerHTML={createMarkup(flight.description[language])}></p>
            </div>
        </div >
    )
}

export default FlightList;
