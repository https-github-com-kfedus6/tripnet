import React from 'react'
import { useState } from 'react'
import FlightsItem from './FlightsItem'
import { useTypedSelector } from '../hooks/useTypedSelector'

const FlightsList = ({ setStartDate, setStartPosition, setFinishPosition, sortFlights }) => {
    const [check, setCheck] = useState(false)

    const { flights } = useTypedSelector(state => state.flights)

    if (flights.length === 0) {
        return (
            <div>loader</div>
        )
    } else {
        return (
            <div className='flights-container'>
                <form>
                    <div>
                        <input type="radio" />
                        <label htmlFor="firstRadio">Подорож в один бік</label>
                        <input type="radio" />
                        <label htmlFor="secondRadio">Зворотна подорож</label>
                    </div>
                    <div>
                        <input type="text" placeholder='Звідки' onChange={(e) => setStartPosition(e.target.value)} />
                        <input type="text" placeholder='Куда' onChange={(e) => setFinishPosition(e.target.value)} />
                        <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                        <button onClick={sortFlights}>Пошук</button>
                    </div>
                </form>
                <div className='flights-block'>
                    <div className='items-flight'>
                        {flights.rows.map(item => {
                            return (
                                <FlightsItem key={item.id} item={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default FlightsList;