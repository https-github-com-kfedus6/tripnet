import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import FlightsList from '../../components/FlightsList';
import { getPageCount, getPagesArray } from '../../utils/page';
import ModalFormBuy from '../../components/UI/modalFormBuy/ModalFormBuy';
import './flights.css';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const Flights = ({ isShowFilter }) => {
    const [visibleBuy, setVisiblyBuy] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [countTicket, setCountTicket] = useState(1)
    const [flightId, setFlightId] = useState('')

    const { startPositionInitial, finishPositionInitial, dateInitial, sumOldInitial, sumYoungInitial } = useSelector(state => state.flightsSearchWithHomeReducer)

    const [startPosition, setStartPosition] = useState(startPositionInitial)
    const [finishPosition, setFinishPosition] = useState(finishPositionInitial)
    const [startDate, setStartDate] = useState(dateInitial)
    const [totalCount, setTotalCount] = useState(undefined)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const [sumYoung, setSumYoung] = useState(sumYoungInitial)
    const [sumOld, setSumOld] = useState(sumOldInitial)

    const { fetchGetFlights, fetchDeleteFlight, postFlightOrder, SetFlightParams } = useAction()

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
        if (flights != undefined) setTotalCount(getPageCount(flights.count, limit))
    }, [flights])

    let pagesArray = getPagesArray(totalCount)

    const changePage = (page) => {
        setPage(page)
    }

    const moreFlights = () => {
        setLimit(limit + 3)
    }

    const {is_login,user}=useSelector(state=>state.user);
    const sortFlights = (event) => {

        event.preventDefault();
        setPage(1);
        SetFlightParams(startPosition,finishPosition,startDate,sumOld,sumYoung);
        fetchGetFlights({
            startPosition: startPosition,
            finishPosition: finishPosition,
            startDate: startDate,
            countFreePlace: sumYoung + sumOld,
            limit: limit,
            page: 1
        })
    }

    const deleteFlight = (id) => {
        fetchDeleteFlight(id)
    }
    const handleChange = (event, value) => {
        setPage(value)
    }

    const reserveTicket = () => {
        setVisiblyBuy(false)
        if(!is_login){
            postFlightOrder({
                flightId: flightId,
                authorName: name,
                countTicket: countTicket,
                phone: phone
            })
        }else{
            postFlightOrder({
                flightId: flightId,
                authorName: name,
                countTicket: countTicket,
                phone: phone,
                userId: user.id
            })
        }
        setCountTicket(1)
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
            {totalCount == undefined ? <></> :
                <div className='pagination'>
                    <Stack spacing={1}>
                        <Pagination count={totalCount} page={page} onChange={handleChange} />
                    </Stack>
                </div>}
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
                maxTicket={flights?.rows.find(x => x.id == flightId)?.countFreePlace}
            />
        </div>
    )
}

export default Flights;