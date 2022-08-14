import axios from 'axios';
import { $host } from '../../http/index'
import { flightActionTypes } from "../reducers/flightsReducer";

export const fetchGetFlights = (data) => async (dispatch) => {
    try {
        const response = await $host.get('api/flights/', {
            params: {
                ...data
            }
        })
        dispatch({ type: flightActionTypes.FETCH_GET_FLIGHT, payload: response.data })
    } catch (err) {
        console.log(err.message)
    }
}

export const fetchGetCurrency = () => async (dispatch) => {
    try {
        const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=RUB&json')
        dispatch({ type: flightActionTypes.FETCH_GET_CURRENCY, payload: response.data[0].rate })
    } catch (err) {
        console.log(err.message)
    }
}