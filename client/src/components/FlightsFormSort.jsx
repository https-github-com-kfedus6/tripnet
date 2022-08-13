import React from 'react'

const FlightsFormSort = ({ setStartDate, setStartPosition, setFinishPosition, sortFlights }) => {
    return (
        <form className='flights-sort-form'>
            <div className='form-radio'>
                <div>
                    <input type="radio" name='os' />
                    <h3>Подорож в один бік</h3>
                </div>
                <div>
                    <input type="radio" name='os' />
                    <h3>Зворотна подорож</h3>
                </div>
            </div>
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
        </form>
    )
}

export default FlightsFormSort;
