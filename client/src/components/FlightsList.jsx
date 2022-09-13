import { Breadcrumbs, Link, Typography } from '@mui/material'
import { t } from 'i18next'
import React from 'react'
import { NavLink } from 'react-router-dom'
import FlightsFormSort from './FlightsFormSort'
import FlightsItem from './FlightsItem'

const FlightsList = ({ finishPosition, startPosition, startDate, flights, setStartDate, setStartPosition, setFinishPosition, sortFlights, sumOld, setSumOld, sumYoung, setSumYoung, deleteFlight, limit, page, isFilterTrue, openModal }) => {

    if (flights == undefined || flights.length === 0) {
        return (
            <div>loading...</div>
        )
    } else {
        return (
            <div className='flights-container'>
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
                /> : <></>}
                <Breadcrumbs>
                    <NavLink to="/">
                        {t("header.first_link")}
                    </NavLink>
                    <Typography color="text.primary">{t("header.third_link")}</Typography>
                </Breadcrumbs>
                <div className='flights-block'>
                    
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
                </div>
            </div>
        )
    }

}

export default FlightsList;