import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import ukLocale from 'date-fns/locale/uk';

const FlightUpdate = () => {

    const { id } = useParams()

    const { fetchGetFlight, fetchUpdateFlight } = useAction()

    const { flight } = useSelector(state => state.flights)

    const navigate = useNavigate()

    const [newStartPosition, setNewStartPosition] = useState('')
    const [newFinishPosition, setNewFinishPosition] = useState('')
    const [newStreetStartPosition, setNewStreetStartPosition] = useState('')
    const [newStreetFinishPosition, setNewStreetFinishPosition] = useState('')
    const [newStartDate, setNewStartDate] = useState('')
    const [newFinishDate, setNewFinishDate] = useState('')
    const [newStartTime, setNewStartTime] = useState('')
    const [newFinishTime, setNewFinishTime] = useState('')
    const [newTimeFlight, setNewTimeFllight] = useState('')
    const [newCountFreePlace, setNewCaountFreePlace] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newMaps, setNewMaps] = useState('')

    useEffect(() => {
        fetchGetFlight(id)
    }, [])

    const changeFlight = () => {
        let formData = new FormData();
        formData.append('id', id);
        formData.append('price', newPrice == "" ? flight.price : newPrice);
        formData.append('startPosition', newStartPosition == "" ? flight.startPosition.join("//") : newStartPosition);
        formData.append('finishPosition', newFinishPosition == "" ? flight.finishPosition.join("//") : newFinishPosition);
        formData.append('startDate', newStartDate == "" ? flight.startDate : newStartDate);
        formData.append('finishDate', newFinishDate == "" ? flight.finishDate : newFinishDate);
        formData.append('startTime', newStartTime == "" ? flight.startTime : newStartTime);
        formData.append('finishTime', newFinishTime == "" ? flight.finishTime : newFinishTime);
        formData.append('timeFlight', newTimeFlight == "" ? flight.timeFlight : newTimeFlight);
        formData.append('countFreePlace', newCountFreePlace == "" ? flight.countFreePlace : newCountFreePlace);
        fetchUpdateFlight(formData)
    }

    return (
        <div className='flight-update-admin'>
            <div className='flight-blocks-update-admin'>
                <div className='flight-block-update-start-finish-admin'>
                    <div className='flight-update-start-finish-admin'>
                        <div className='flight-update-input-start-finish-admin'>
                            <p>Змінити місто виїзду:</p>
                            <span>Приклад: <b>Львів//Львов</b></span>
                            <input type="text"
                                placeholder='Львів//Львов'
                                value={newStartPosition}
                                onChange={(e) => setNewStartPosition(e.target.value)}
                            />
                        </div>
                        <div className='flight-update-input-start-finish-admin'>
                            <p>Змінити вулиця посадки:</p>
                            <span>Приклад: <b>Українська//Російська</b></span>
                            <input type="text"
                                placeholder='Українська//Російська'
                                value={newStreetStartPosition}
                                onChange={(e) => setNewStreetStartPosition(e.target.value)}
                            />
                        </div>
                        <div className='flight-update-date-admin'>
                            <p>Змінити дату відправлення:</p>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                adapterLocale={ukLocale}
                            >
                                <DesktopDatePicker
                                    inputFormat="DD.MM.YYYY"
                                    renderInput={({ inputRef, inputProps, InputProps }) => (
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <input autoComplete='off' id='custom-date-thrid' ref={inputRef} {...inputProps} />
                                            {InputProps?.endAdornment}
                                        </Box>
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                        <div>
                            <p>Змінити годину виїзду:</p>
                            <input type="time" />
                        </div>
                    </div>
                    <div className='flight-update-start-finish-admin'>
                        <div className='flight-update-input-start-finish-admin'>
                            <p>Змінити місто приїзду:</p>
                            <span>Приклад: <b>Київ//Киев</b></span>
                            <input type="text"
                                placeholder='Київ//Киев'
                                value={newFinishPosition}
                                onChange={(e) => setNewFinishPosition(e.target.value)}
                            />
                        </div>
                        <div className='flight-update-input-start-finish-admin'>
                            <p>Змінити вулиця висадки:</p>
                            <span>Приклад: <b>Українська//Російська</b></span>
                            <input type="text"
                                placeholder='Українська//Російська'
                            />
                        </div>
                        <div className='flight-update-date-admin'>
                            <p>Змінити дату прибуття:</p>
                            <input type="date" />
                        </div>
                        <div>
                            <p>Змінити годинуну приїзду:</p>
                            <input type="time" />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Змінити силку на карту:</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Змінити кількість вільних місць:</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Змінити ціну квитка в грн:</p>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightUpdate;