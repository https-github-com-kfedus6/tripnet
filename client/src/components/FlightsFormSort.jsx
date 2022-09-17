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

    const [check, setCheck] = useState(false)
    const [dropdownCheck, setDropdowbCheck] = useState(false)

    const firstCheck = (event) => {
        event.preventDefault()
        setCheck(false)
    }

    const secondCheck = (event) => {
        event.preventDefault()
        setCheck(true)
    }

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


    return (
        <Stack spacing={5}>
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
        </Stack>
    )
}

export default FlightsFormSort;