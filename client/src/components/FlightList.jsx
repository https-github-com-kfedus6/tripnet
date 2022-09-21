import { t } from 'i18next'
import React, { useState } from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { useSelector } from 'react-redux'
import { useAction } from '../hooks/useAction'
import FlightScheduleBusList from './FlightScheduleBusList'
import { NavLink } from 'react-router-dom';

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
                <div className='where__until'>
                    <h1 className='name__city'>{flight.startPosition[language]}</h1>
                    <span><ImArrowRight2 /></span>
                    <h1 className='name__city'>{flight.finishPosition[language]}</h1>
                </div>
                <div className='flight__price'>
                    <span>{flight.price}.00 UAH</span>
                    <button>{t('modalbuy.btn-buy')}</button>
                </div>
            </div>
            <div className='block-comfort'>
                {flight.image == null ? <></> :
                    <div className='flight-image'>
                        <img src={process.env.REACT_APP_API_URL + flight.image} alt={flight.finishPosition} />
                    </div>}
                <div className='items-block-comfort'>
                    {flight.params.map(img => {

                        return (
                            <div key={img.id} className='items-comfort'>
                                <div className={img.isWifi ? 'item-comfort' : 'image-status'}>
                                    <div>
                                        <div>
                                            <div className='section-icon-wi-fi'>
                                                <img src={process.env.REACT_APP_API_URL + "wi-fi2.png"} />
                                            </div>
                                        </div>
                                        <span>Wi-Fi</span>
                                    </div>
                                </div>
                                <div className={img.isMultimedia ? 'item-comfort' : 'image-status'}>
                                    <div>
                                        <div>
                                            <div className='section-icon-multimedia'>
                                                <img src={process.env.REACT_APP_API_URL + "multimedia.png"} />
                                            </div>
                                        </div>
                                        <span>{t("flight.multimedia")}</span>
                                    </div>
                                </div>
                                <div className={img.isWC ? 'item-comfort' : 'image-status'}>
                                    <div>
                                        <div>
                                            <div className='section-icon-wc'>
                                                <img src={process.env.REACT_APP_API_URL + "wc.png"} />
                                            </div>
                                        </div>
                                        <span>wc</span>
                                    </div>
                                </div>
                                <div className={img.is220V ? 'item-comfort' : 'image-status'}>
                                    <div>
                                        <div>
                                            <div className='section-icon-220'>
                                                <img src={process.env.REACT_APP_API_URL + "220v.png"} />
                                            </div>
                                        </div>
                                        <span>220v</span>
                                    </div>
                                </div>
                                <div className={img.isAirConditioning ? 'item-comfort' : 'image-status'}>
                                    <div>
                                        <div>
                                            <div className='section-icon-contd'>
                                                <img src={process.env.REACT_APP_API_URL + "contd.png"} />
                                            </div>
                                        </div>
                                        <span>{t("flight.air_conditioning")}</span>
                                    </div>
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
                <div>
                    <h2>Карта маршрута</h2>
                </div>
                <div className='flight-street-start-finish'>
                    <p>{t("flight.dispatch")} {flight.startPosition[language]}: {flight.streetStartPosition[language]}</p>
                    <p>{t("flight.arrival")} {flight.finishPosition[language]}: {flight.streetFinishPosition[language]}</p>
                </div>
                <div>
                    <iframe src={flight.map} loading="lazy"></iframe>
                </div>
            </div>
            <div className='flight-description'>
                <h2>{t("flight.info_for_flight")} {flight.startPosition[language]} - {flight.finishPosition[language]}:</h2>
                <p dangerouslySetInnerHTML={createMarkup(flight.description[language])}></p>
            </div>
            <div className='flight-links'>
                <div>
                    <p>{t("flight.popular")}</p>
                </div>
                <div className='flight-links-block'>
                    <div className='flight-link-block'>
                        {relinkBlocks == undefined || relinkBlocks.startPosition.length == 0 ? <></> : <>
                            <span>{t("flight.with")} {flight.startPosition[language]}</span>
                            <div>
                                {relinkBlocks.startPosition.map(x =>
                                    <div key={x.id}>
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
                    <div className='flight-link-block'>
                        {relinkBlocks == undefined || relinkBlocks.finishPosition.length == 0 ? <></> : <>
                            <span>{t("flight.to")} {flight.finishPosition[language]}</span>
                            <div>
                                {relinkBlocks.finishPosition.map(x =>
                                    <div key={x.id}>
                                        <NavLink to={"/flight/" + x.startPosition.split("//")[language] + "-" + flight.startPosition[language]
                                            + "/" + x.id}>
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
