import React, { useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { useAction } from '../hooks/useAction';
import { useSelector } from 'react-redux';
import { CgArrowsExchange, CgArrowsExchangeAlt } from 'react-icons/cg';

const FlightsFormSort = ({ startDate, startPosition, finishPosition, setStartDate, setStartPosition, setFinishPosition, sortFlights, sumOld, setSumOld, sumYoung, setSumYoung, setChangePosition, changePosition, changePositionFun }) => {
    const { t } = useTranslation()

    const [isOpen, setIsOpen] = useState(false)
    const [dropdownCheck, setDropdowbCheck] = useState(false)

    const countOldResult = () => {
        if (sumOld === 1) {
            setSumOld(1)
        } else {
            setSumOld(sumOld - 1)
        }
    }

    const countYoungResult = () => {
        if (sumYoung === 0) {
            setSumYoung(0)
        } else {
            setSumYoung(sumYoung - 1)
        }
    }

    const { SearchCity } = useAction()

    const { language } = useSelector(state => state.language);

    const { searchStartPostion, searchFinishPosition } = useSelector(state => state.flights)

    useEffect(() => {
        SearchCity(startPosition, language, true);
    }, [startPosition, language])

    useEffect(() => {
        SearchCity(finishPosition, language, false);
    }, [finishPosition, language])

    const changePos = () => {
        setChangePosition(!changePosition);
        let temp = startPosition;
        setStartPosition(finishPosition);
        setFinishPosition(temp)
    }

    const liStartClickHandler = (e) => {
        setStartPosition(e.target.textContent)
        setIsOpen(!isOpen)
    }

    return (
        <div className='flights-sort-form'>
            <div className='form-checkboxes'>
                <div>
                    <input type="radio" />
                    <span>Рейс в один бік</span>
                </div>
                <div>
                    <input type="radio" />
                    <span>Рейс в дві сторони</span>
                </div>
            </div>
            <div className='form-inputs-button-group'>
                <div className='form-input-text'>
                    <input id='form-text' className='position-text'
                        type="text"
                        placeholder=' '
                        autocomplete="off"
                        value={startPosition}
                        onChange={(e) => { setStartPosition(e.target.value) }}
                        onClick={() => setIsOpen(true)}
                    />
                    <label className='label-text' for='form-text'>{t('flight.whence')}</label>
                    {
                        startPosition && isOpen
                            ?
                            <ul className='autocomplete'>
                                {searchStartPostion.map((city) => {
                                    return (
                                        <li key={city.title} onClick={liStartClickHandler}>{city.title}</li>
                                    )
                                })}
                            </ul>
                            :
                            null
                    }
                </div>
                <div className='form-swap'>
                    <img src={process.env.REACT_APP_API_URL + 'swap.png'} alt="swap" />
                </div>
                <div className='form-input-text'>
                    <input id='form-text-second' className='position-text'
                        type="text"
                        placeholder=' '
                        autocomplete="off"
                        value={finishPosition}
                        onChange={(e) => { setFinishPosition(e.target.value) }}
                    />
                    <label className='label-text' for="form-text-second">{t('flight.whitherto')}</label>
                    {
                        finishPosition
                            ?
                            <ul className='autocomplete'>
                                {searchFinishPosition.map((city) => {
                                    return (
                                        <li key={city.title} onClick={(e) => setFinishPosition(e.target.textContent)}>{city.title}</li>
                                    )
                                })}
                            </ul>
                            :
                            null
                    }
                </div>
                <div>
                    <input type="date" />
                </div>
                <div>
                    <input type="date" />
                </div>
                <div className='dropdown-passengers'>
                    <div className='dropdown-select-passegers' onClick={() => dropdownCheck ? setDropdowbCheck(false) : setDropdowbCheck(true)}>
                        <input className='dropdown-passegers-input' type="text" id='passegers' placeholder=' ' value={dropdownCheck ? `${sumOld} ${t('flight.pass_old')}, ${sumYoung} дитина` : ''} disabled />
                        <label className='dropdown-passegers-text' for="passegers">{t('flight.passegers')}</label>
                        <label className='dropdown-icon-user'>
                            <img src={process.env.REACT_APP_API_URL + 'users.png'} alt="passegers" />
                        </label>
                    </div>
                    <div className={dropdownCheck ? 'dropdown-list-passegers' : 'dropdown-none'}>
                        <div className='dropdown-list-item-passegers'>
                            <div className='dropdown-list-item-passegers-text'>
                                <span>{t('flight.older_15_years')}</span>
                            </div>
                            <div className='dropdown-list-item-passegers-count'>
                                <div className='dropdown-list-item-passegers-minus-and-plus'>
                                    <img src={process.env.REACT_APP_API_URL + 'minuss.png'} alt="minus" onClick={() => countOldResult()} />
                                </div>
                                <div value={sumOld}>{sumOld}</div>
                                <div className='dropdown-list-item-passegers-minus-and-plus'>
                                    <img src={process.env.REACT_APP_API_URL + 'plus.png'} alt="plus" onClick={() => setSumOld(sumOld + 1)} />
                                </div>
                            </div>
                        </div>
                        <div className='dropdown-list-item-passegers'>
                            <div className='dropdown-list-item-passegers-text'>
                                <span>{t('flight.younger_14_years')}</span>
                            </div>
                            <div className='dropdown-list-item-passegers-count'>
                                <div className='dropdown-list-item-passegers-minus-and-plus'>
                                    {sumYoung >= 1
                                        ?
                                        <img src={process.env.REACT_APP_API_URL + 'minuss.png'} alt="minus" onClick={() => countYoungResult()} />
                                        :
                                        <img src={process.env.REACT_APP_API_URL + 'minus.png'} alt="minus" onClick={() => countYoungResult()} />
                                    }
                                </div>
                                <div value={sumYoung}>{sumYoung}</div>
                                <div className='dropdown-list-item-passegers-minus-and-plus'>
                                    <img src={process.env.REACT_APP_API_URL + 'plus.png'} alt="plus" onClick={() => setSumYoung(sumYoung + 1)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-button-search'>
                    <button onClick={sortFlights}>Пошук</button>
                </div>
            </div>
        </div >
        /*  <Stack spacing={5}>
             <div className='form-flights-container'>
                 <div className='flights-sort-form'>
                     <div className='form-flights'>
                         <div className='form-block-position'>
                             <div className='form-position icon-change'>
                                 <Autocomplete
                                     size='small'
                                     freeSolo
                                     id="free-solo-2-demo"
                                     disableClearable
                                     value={startPosition}
                                     onChange={(value, newValue) => setStartPosition(newValue)}
                                     options={searchStartPostion.map((option) => option.title)}
                                     renderInput={(params) => (
                                         <TextField sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                                             onChange={(e) => { setStartPosition(e.target.value) }}
                                             {...params}
                                             label={t('flight.whence')}
                                             InputProps={{
                                                 ...params.InputProps,
                                                 type: 'search',
                                             }}
                                         />)}
                                 />
                             </div>
                             <div className='change-position'>
                                 <div>
                                     <span onClick={changePos}>
                                         {changePosition ? <CgArrowsExchangeAlt /> : <CgArrowsExchange />}
                                     </span>
                                 </div>
                             </div>
                             <div className='form-position'>
                                 <Autocomplete
                                     size='small'
                                     freeSolo
                                     id="free-solo-2-demo"
                                     disableClearable
                                     value={finishPosition}
                                     onChange={(e, newValue) => setFinishPosition(newValue)}
                                     options={searchFinishPosition.map((option) => option.title)}
                                     renderInput={(params) => (
                                         <TextField sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                                             onChange={(e) => { setFinishPosition(e.target.value) }}
                                             {...params}
                                             label={t('flight.whitherto')}
                                             InputProps={{
                                                 ...params.InputProps,
                                                 type: 'search',
                                             }}
                                         />)}
                                 />
                             </div>
                         </div>
                         <div className='form-block-date'>
                             <div className='form-date'>
                                 <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                             </div>
                             <div className='dropdown'>
                                 <div onClick={() => setDropdowbCheck(true)} className='dropdown-select'>
                                     <span className='select'>{t('flight.passengers')}</span>
                                     <i className='down-icon icon'><AiOutlineCaretDown /></i>
                                 </div>
                                 <div className={dropdownCheck ? 'dropdown-list' : 'dropdown-none'}>
                                     <div className='dropdown-list-item'>
                                         <div>
                                             <strong>{t('flight.adults')}</strong>
                                             <br />
                                             <span>{t('flight.older_15_years')}</span>
                                         </div>
                                         <div className='count-place'>
                                             <div className='minus' onClick={() => countOldResult()}>-</div>
                                             <div className='sum' value={sumOld}>{sumOld}</div>
                                             <div className='plus' onClick={() => setSumOld(sumOld + 1)}>+</div>
                                         </div>
                                     </div>
                                     <div className='dropdown-list-item'>
                                         <div>
                                             <strong>{t('flight.children')}</strong>
                                             <br />
                                             <span>{t('flight.younger_14_years')}</span>
                                         </div>
                                         <div className='count-place'>
                                             <div className='minus' onClick={() => countYoungResult()}>-</div>
                                             <div className='sum' value={sumYoung}>{sumYoung}</div>
                                             <div className='plus' onClick={() => setSumYoung(sumYoung + 1)}>+</div>
                                         </div>
                                     </div>
                                     <div className='dropdown-btn-none'>
                                         <button onClick={() => setDropdowbCheck(false)} >{t('flight.dropdown_btn')}</button>
                                     </div>
                                 </div>
                             </div>
                             <div className='form-search'>
                                 <button onClick={sortFlights}>{t('flight.search')}</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div >
         </Stack> */
    )
}

export default FlightsFormSort;