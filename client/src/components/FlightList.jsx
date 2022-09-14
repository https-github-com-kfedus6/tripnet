import { t } from 'i18next'
import React, { useState } from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { useSelector } from 'react-redux'
import { useAction } from '../hooks/useAction'
import FlightScheduleBusList from './FlightScheduleBusList'
import { NavLink } from 'react-router-dom';
import { HiOutlineArrowLongRight } from 'react-icons/hi'

const FlightList = ({ flight, is_admin, setScheduleTo, setScheduleWith, status, changeStatus, changeSchedule, relinkBlocks }) => {
    const { language } = useSelector(state => state.language);

    function createMarkup(text) { return { __html: text }; };

    const [startPosition, setStartPosition] = useState(flight.startPosition.join("//"));
    const [finishPosition, setFinishPosition] = useState(flight.finishPosition.join("//"));
    const [startDate, setStartDate] = useState(flight.startDate);
    const [finishDate, setFinishDate] = useState(flight.finishDate);
    const [countFreePlace, setCountFreePlace] = useState(flight.countFreePlace);
    const [timeFlight, setTimeFlight] = useState(flight.timeFlight);
    const [price, setPrice] = useState(flight.price)
    const [startTime, setStartTime] = useState(flight.startTime);
    const [finishTime, setFinishTime] = useState(flight.finishTime);

    const { fetchUpdateFlight } = useAction();

    const changeFlight = () => {
        let formData = new FormData();
        formData.append('id', flight.id);
        formData.append('price', price);
        formData.append('startPosition', startPosition);
        formData.append('finishPosition', finishPosition);
        formData.append('startDate', startDate);
        formData.append('finishDate', finishDate);
        formData.append('startTime', startTime);
        formData.append('finishTime', finishTime);
        formData.append('timeFlight', timeFlight);
        formData.append('countFreePlace', countFreePlace);
        formData.append('limit', 1);
        formData.append('page', 1);
        fetchUpdateFlight(formData);
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
                {flight.image == null ? <></> :
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
                                <div className={img.isMultimedia ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "IsMultimedia.png"} />
                                    <span>{t("flight.multimedia")}</span>
                                </div>
                                <div className={img.isWC ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "isWC.png"} />
                                    <span>wc</span>
                                </div>
                                <div className={img.is220V ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "is220v.png"} />
                                    <span>220v</span>
                                </div>
                                <div className={img.isAirConditioning ? '' : 'image-status'}>
                                    <img src={process.env.REACT_APP_API_URL + "IsAirConditioning.png"} />
                                    <span>{t("flight.air_conditioning")}</span>
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
                <h2>{t("flight.info_for_flight")} {flight.startPosition[language]} - {flight.finishPosition[language]}:</h2>
                <p dangerouslySetInnerHTML={createMarkup(flight.description[language])}></p>
            </div>
            <div className='flight-links'>
                <p>Популярні рейси</p>
                <div className='flight-links-block'>
                    <div>
                        {relinkBlocks.startPosition.lenght == 0 ? <></> : <>
                            <span>з {flight.startPosition[language]}</span>
                            <div>
                                {relinkBlocks.startPosition.map(x =>
                                    <div>
                                        <NavLink
                                            to={"/flight/" + flight.startPosition[language] + "-"
                                                + x.finishPosition.split("//")[language] + "/" + x.id}
                                            key={x.id}>
                                            {flight.startPosition[language]}-{x.finishPosition.split("//")[language]}
                                        </NavLink>
                                    </div>)}
                            </div>
                        </>}
                    </div>
                    <div>
                        {relinkBlocks.finishPosition.lenght == 0 ? <></> : <>
                            <span>до {flight.finishPosition[language]}</span>
                            <div>
                                {relinkBlocks.finishPosition.map(x =>
                                    <div>
                                        <NavLink to={"/flight/" + x.startPosition.split("//")[language] + "-" + flight.startPosition[language]
                                            + "/" + x.id}
                                            key={x.id}>
                                            {x.startPosition.split("//")[language]}-{flight.finishPosition[language]}
                                        </NavLink>
                                    </div>)}
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FlightList;
