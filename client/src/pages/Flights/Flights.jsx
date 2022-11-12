import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import FlightsList from '../../components/FlightsList';
import { getPageCount, getPagesArray } from '../../utils/page';
import ModalFormBuy from '../../components/UI/modalFormBuy/ModalFormBuy';

import { t } from 'i18next';

import './flights.css';

const Flights = ({ isShowFilter }) => {

    const [visibleBuy, setVisiblyBuy] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [surename, setSurename] = useState('')
    const [email, setEmail] = useState('')

    const [dropdownCheckBack, setDropdowbCheckBack] = useState(false)
    const [dropdownCheck, setDropdowbCheck] = useState(false)
    const [sumYoungBack, setSumYoungBack] = useState(0)
    const [sumOldBack, setSumOldBack] = useState(1)
    const [date, setDate] = useState('')
    const [dateBack, setDateBack] = useState('')
    const [flightId, setFlightId] = useState('')
    const [checked, setChecked] = useState(false);

    const { startPositionInitial, finishPositionInitial, dateInitial, sumOldInitial, sumYoungInitial } = useSelector(state => state.flightsSearchWithHomeReducer)

    const [startPosition, setStartPosition] = useState(startPositionInitial)
    const [finishPosition, setFinishPosition] = useState(finishPositionInitial)
    const [startDate, setStartDate] = useState(dateInitial)
    const [finishDate, setFinishDate] = useState(dateInitial)
    const [totalCount, setTotalCount] = useState(undefined)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const [sumYoung, setSumYoung] = useState(sumYoungInitial)
    const [sumOld, setSumOld] = useState(sumOldInitial)

    const [changePosition, setChangePosition] = useState(false)

    const { fetchGetFlights, fetchDeleteFlight, postFlightOrder, SetFlightParams,
        SetShowMessgeTrue, SetShowMessgeFalse, fetchGetFlight } = useAction()

    const { flights, flight } = useSelector(state => state.flights)

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
        fetchGetFlight(flightId)
    }, [flightId])

    useEffect(() => {
        if (flights != undefined) setTotalCount(getPageCount(flights.count, limit))
    }, [flights])

    let pagesArray = getPagesArray(totalCount)

    const { is_login, user } = useSelector(state => state.user);

    const sortFlights = (event) => {

        event.preventDefault();
        setPage(1);
        SetFlightParams(startPosition, finishPosition, startDate, sumOld, sumYoung);
        if (changePosition === true) {
            fetchGetFlights({
                startPosition: startPosition,
                finishPosition: finishPosition,
                startDate: startDate,
                countFreePlace: sumYoung + sumOld,
                limit: limit,
                page: 1
            })
        } else {
            fetchGetFlights({
                startPosition: startPosition,
                finishPosition: finishPosition,
                startDate: startDate,
                countFreePlace: sumYoung + sumOld,
                limit: limit,
                page: 1
            })
        }
    }

    const deleteFlight = (id) => {
        fetchDeleteFlight(id)
    }
    const handleChange = (event, value) => {
        setPage(value)
    }

    const reserveTicket = () => {
        /* const regTelephone = /(^\++\d{11}$)|(^\d{10})$/;
         if (!regTelephone.test(phone)) {
             SetShowMessgeTrue(t("authorize.invalid_telephone"));
             setTimeout(() => SetShowMessgeFalse(), 3000);
             return;
         }*/

        setVisiblyBuy(false);
        let maxTicket = flights?.rows.find(x => x.id == flightId)?.countFreePlace

        let countTicket = sumOld + sumYoung

        if (maxTicket > countTicket) {
            if (!is_login) {
                postFlightOrder({
                    surename: surename,
                    name: name,
                    phone: phone.phone,
                    email: email,
                    countPersons: sumOld + sumYoung,
                    date: `${date.$D}.${date.$M + 1}.${date.$y}`,
                    countPersonsBack: sumOldBack + sumYoungBack,
                    dateBack: `${dateBack.$D}.${dateBack.$M + 1}.${dateBack.$y}`,
                    flightId: flightId
                })
                setSurename('')
                setName('')
                setPhone('')
                setEmail('')
                setDate('')
                setDateBack('')
                setSumOldBack(1)
                setSumYoung(0)
                setSumOld(1)
                setSumYoung(0)
            } else {
                postFlightOrder({
                    surename: surename,
                    name: name,
                    phone: phone.phone,
                    email: email,
                    countPersons: sumOld + sumYoung,
                    date: `${date.$D}.${date.$M + 1}.${date.$y}`,
                    countPersonsBack: sumOldBack + sumYoungBack,
                    dateBack: `${dateBack.$D}.${dateBack.$M + 1}.${dateBack.$y}`,
                    flightId: flightId,
                    userId: user.id
                })
                setDateBack('')
                setSumOldBack(1)
                setSumYoung(0)
                setDate('')
                setSumOld(1)
                setSumYoung(0)
            }
        } else {
            console.log('no ticket')
        }
    }

    const openModal = (id) => {
        setVisiblyBuy(true)
        setFlightId(id)
        setDate(flight.startDate)
    }

    const changePositionFun = () => {
        if (changePosition === true) {
            setChangePosition(false)
        } else {
            setChangePosition(true)
        }
    }

    return (
        <>
            <div className='flights'>
                <FlightsList
                    flights={flights}
                    sortFlights={sortFlights}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    finishDate={finishDate}
                    setFinishDate={setFinishDate}
                    setStartPosition={setStartPosition}
                    setFinishPosition={setFinishPosition}
                    sumOld={sumOld}
                    setSumOld={setSumOld}
                    sumYoung={sumYoung}
                    setSumYoung={setSumYoung}
                    deleteFlight={deleteFlight}
                    limit={limit}
                    page={page}
                    totalCount={totalCount}
                    handleChange={handleChange}
                    isFilterTrue={isShowFilter}
                    openModal={openModal}
                    startPosition={startPosition}
                    finishPosition={finishPosition}
                    changePosition={changePosition}
                    setChangePosition={setChangePosition}
                    changePositionFun={changePositionFun}
                />
                <ModalFormBuy
                    flight={flight}
                    visibleBuy={visibleBuy}
                    setVisiblyBuy={setVisiblyBuy}
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    setDate={setDate}
                    date={date}
                    dateBack={dateBack}
                    setDateBack={setDateBack}
                    reserveTicket={reserveTicket}
                    dropdownCheck={dropdownCheck}
                    setDropdowbCheck={setDropdowbCheck}
                    dropdownCheckBack={dropdownCheckBack}
                    setDropdowbCheckBack={setDropdowbCheckBack}
                    sumYoung={sumYoung}
                    setSumYoung={setSumYoung}
                    sumOld={sumOld}
                    setSumOld={setSumOld}
                    sumYoungBack={sumYoungBack}
                    setSumYoungBack={setSumYoungBack}
                    sumOldBack={sumOldBack}
                    setSumOldBack={setSumOldBack}
                    checked={checked}
                    setChecked={setChecked}
                    surename={surename}
                    setSurename={setSurename}
                    email={email}
                    setEmail={setEmail}
                />
            </div>
        </>
    )
}

export default Flights;