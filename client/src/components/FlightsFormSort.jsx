import React, { useState } from 'react'

const FlightsFormSort = ({ setStartDate, setStartPosition, setFinishPosition, sortFlights }) => {
    const [check, setCheck] = useState(false)

    const firstCheck = (event) => {
        event.preventDefault()
        setCheck(false)
    }

    const secondCheck = (event) => {
        event.preventDefault()
        setCheck(true)
    }

    return (
        <form className='flights-sort-form'>
            <div className='form-btn'>
                <div>
                    <button className={check === false ? 'first-active' : 'bnt-start'} onClick={firstCheck}>Подорож в один бік</button>
                </div>
                <div>
                    <button className={check === true ? 'first-active' : 'bnt-start'} onClick={secondCheck}>Зворотна подорож</button>
                </div>
            </div>
            {check === false
                ?
                <>
                    <span className='start'>Відправлення</span>
                    <div className='form-inputs'>
                        <div className='form-start'>
                            <input type="text" placeholder='Звідки' onChange={(e) => setStartPosition(e.target.value)} />
                        </div>
                        <div className='form-start'>
                            <input type="text" placeholder='Куда' onChange={(e) => setFinishPosition(e.target.value)} />
                        </div>
                        <div className='form-start-date'>
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className='form-search'>
                            <button onClick={sortFlights}>Пошук</button>
                        </div>
                    </div>
                </>
                :
                <>
                    <span className='start'>Відправлення</span>
                    <div className='form-inputs'>
                        <div className='form-start'>
                            <input type="text" placeholder='Звідки' onChange={(e) => setStartPosition(e.target.value)} />
                        </div>
                        <div className='form-start'>
                            <input type="text" placeholder='Куда' onChange={(e) => setFinishPosition(e.target.value)} />
                        </div>
                        <div className='form-start-date'>
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className={check === false ? 'form-search' : 'form-search-none'}>
                            <button onClick={sortFlights}>Пошук</button>
                        </div>
                    </div>
                    <span className='start'>Повернення</span>
                    <div className='form-inputs-finish'>
                        <div className='form-start'>
                            <input type="text" placeholder='Звідки' onChange={(e) => setStartPosition(e.target.value)} />
                        </div>
                        <div className='form-start'>
                            <input type="text" placeholder='Куда' onChange={(e) => setFinishPosition(e.target.value)} />
                        </div>
                        <div className='form-start-date'>
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className={check === true ? 'form-search' : 'form-search-none'}>
                            <button onClick={sortFlights}>Пошук</button>
                        </div>
                    </div>
                </>
            }
        </form>
    )
}

export default FlightsFormSort;
