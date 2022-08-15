import React, { useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';

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
        <form className='form-flights-container'>
            <div className='flights-sort-form'>
                <div className='form-btn'>
                    <div className='first-btn'>
                        <button className={check === false ? 'travel-active' : 'travel'} onClick={firstCheck}>Подорож в один бік</button>
                    </div>
                    <div className='second-btn'>
                        <button className={check === true ? 'travel-active' : 'travel'} onClick={secondCheck}>Зворотна подорож</button>
                    </div>
                </div>
                <div className='form-flights'>
                    <div className='form-block-position'>
                        <div className='form-position'>
                            <span>Звідки</span>
                            <input type="text" placeholder='Звідки' onChange={(e) => setStartPosition(e.target.value)} />
                        </div>
                        <div className='form-position'>
                            <span>Куди</span>
                            <input type="text" placeholder='Куда' onChange={(e) => setFinishPosition(e.target.value)} />
                        </div>
                    </div>
                    <div className='form-block-date'>
                        <div className='form-date'>
                            <span>Відправлення</span>
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className={check === true ? 'form-date' : 'form-date-none'}>
                            <span >Повернення</span>
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className='dropdown'>
                            <div className='dropdown-select'>
                                <span className='select' >Пасажири</span>
                                <i className='down-icon icon'><AiOutlineCaretDown /></i>
                            </div>
                            <div className='dropdown-list'>
                                <div className='dropdown-list-item'>
                                    <div>
                                        <strong>Дорослі</strong>
                                        <span>Cтарше 15 років</span>
                                    </div>
                                    <div>
                                        <input type="number" />
                                    </div>
                                </div>
                                <div className='dropdown-list-item'>
                                    <div>
                                        <strong>Діти</strong>
                                        <span>0-14 років</span>
                                    </div>
                                    <div>
                                        <input type="number" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='form-search'>
                            <button onClick={sortFlights}>Пошук</button>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    )
}

export default FlightsFormSort;
