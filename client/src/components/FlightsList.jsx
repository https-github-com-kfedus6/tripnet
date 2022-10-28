import { Breadcrumbs, Link, Typography } from '@mui/material'
import { t } from 'i18next'
import React from 'react'
import { NavLink } from 'react-router-dom'
import FlightsFormSort from './FlightsFormSort'
import FlightsItem from './FlightsItem'

const FlightsList = ({ finishPosition, startPosition, startDate, flights, setStartDate, setStartPosition, setFinishPosition, sortFlights, sumOld, setSumOld, sumYoung, setSumYoung, deleteFlight, limit, page, isFilterTrue, openModal, changePosition, setChangePosition, changePositionFun }) => {

    if (flights == undefined || flights.length === 0) {
        return (
            <div>loading...</div>
        )
    } else {
        return (
            <>
                <div className='flights-container'>
                    <div className='fligths-form'>
                        <div className='bredcrumbs'>
                            <div>
                                <NavLink to="/">{t("header.first_link")}</NavLink>
                            </div>
                            <div>
                                <img src={process.env.REACT_APP_API_URL + 'chevron-right.png'} alt="right" />
                            </div>
                            <div>
                                <span>
                                    {t('flight.search')}
                                </span>
                            </div>
                        </div>
                        {isFilterTrue ? <FlightsFormSort
                            setStartDate={setStartDate}
                            setStartPosition={setStartPosition}
                            setFinishPosition={setFinishPosition}
                            sortFlights={sortFlights}
                            sumOld={sumOld}
                            setSumOld={setSumOld}
                            sumYoung={sumYoung}
                            setSumYoung={setSumYoung}
                            deleteFlight={deleteFlight}
                            limit={limit}
                            page={page}
                            startPosition={startPosition}
                            finishPosition={finishPosition}
                            startDate={startDate}
                            changePosition={changePosition}
                            setChangePosition={setChangePosition}
                            changePositionFun={changePositionFun}
                        /> : <></>}
                    </div>
                </div>
                <div className='flights-block'>
                    {flights.rows.length ?
                        <div className='items-flight'>
                            {flights.rows.map(item => {
                                return (
                                    <FlightsItem
                                        key={item.id}
                                        item={item}
                                        flights={flights}
                                        sumOld={sumOld}
                                        sumYoung={sumYoung}
                                        deleteFlight={deleteFlight}
                                        limit={limit}
                                        page={page}
                                        openModal={openModal}
                                    />
                                )
                            })}
                        </div>
                        :
                        <div className='flight-not-found'>
                            <p>{t('flight.notfound')}!</p>
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default FlightsList;