import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import FlightsList from '../../components/FlightsList';
import Pagination from '../../components/UI/pagination/Pagination';
import { getPageCount, getPagesArray } from '../../utils/page';
import ModalFormBuy from '../../components/UI/modalFormBuy/ModalFormBuy';
import './flights.css';

const Flights = ({ isShowFilter }) => {
    const [visibleBuy, setVisiblyBuy] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [countTicket, setCountTicket] = useState(1)
    const [flightId, setFlightId] = useState('')

    const { startPositionInitial, finishPositionInitial, dateInitial } = useSelector(state => state.flightsSearchWithHomeReducer)

    const [startPosition, setStartPosition] = useState(startPositionInitial)
    const [finishPosition, setFinishPosition] = useState(finishPositionInitial)
    const [startDate, setStartDate] = useState(dateInitial)
    const [totalCount, setTotalCount] = useState()
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const [sumYoung, setSumYoung] = useState(0)
    const [sumOld, setSumOld] = useState(1)

    const { fetchGetFlights, fetchDeleteFlight, postFlightOrder } = useAction()

    const { flights } = useSelector(state => state.flights)

    useEffect(() => {
        fetchGetFlights({
            startPosition: startPosition,
            finishPosition: finishPosition,
            startDate: startDate,
            countFreePlace: sumYoung + sumOld,
            limit: limit,
            page: page
        })
    }, [limit, page])

    useEffect(() => {
        setTotalCount(getPageCount(flights.count, limit))
    }, [flights])

    let pagesArray = getPagesArray(totalCount)

    const changePage = (page) => {
        setPage(page)
    }

    const moreFlights = () => {
        setLimit(limit + 3)
    }

    const sortFlights = (event) => {
        event.preventDefault()
        fetchGetFlights({
            startPosition: startPosition,
            finishPosition: finishPosition,
            startDate: startDate,
            countFreePlace: sumYoung + sumOld,
            limit: limit,
            page: page
        })
    }

    const deleteFlight = (id) => {
        fetchDeleteFlight(id)
    }

    const reserveTicket = () => {
        setVisiblyBuy(false)
        postFlightOrder({
            flightId: flightId,
            authorName: name,
            countTicket: countTicket,
            phone: phone
        })
        setName('')
        setPhone('')
        setCountTicket('')
    }

    const openModal = (id) => {
        setVisiblyBuy(true)
        setFlightId(id)
    }
    return (
        <div className='flights'>
            <FlightsList
                flights={flights}
                sortFlights={sortFlights}
                setStartDate={setStartDate}
                setStartPosition={setStartPosition}
                setFinishPosition={setFinishPosition}
                sumOld={sumOld}
                setSumOld={setSumOld}
                sumYoung={sumYoung}
                setSumYoung={setSumYoung}
                deleteFlight={deleteFlight}
                limit={limit}
                page={page}
                isFilterTrue={isShowFilter}
                openModal={openModal}
                startPosition={startPosition}
                startDate={startDate}
                finishPosition={finishPosition}
            />
            <Pagination
                flights={flights}
                pagesArray={pagesArray}
                page={page}
                limit={limit}
                changePage={changePage}
                moreFlights={moreFlights}
            />
            <ModalFormBuy
                visibleBuy={visibleBuy}
                setVisiblyBuy={setVisiblyBuy}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                reserveTicket={reserveTicket}
                countTicket={countTicket}
                setCountTicket={setCountTicket}
                maxTicket={flights?.rows.find(x=>x.id==flightId)?.countFreePlace}
            />
        </div>
    )
}

export default Flights;