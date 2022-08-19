import { $host } from '../../http/index'
import { flightActionTypes } from "../reducers/flightsReducer";

export const fetchGetFlights = (data) => async (dispatch) => {
    try {
        const response = await $host.get('api/flights/', {
            params: {
                ...data
            }
        })
        dispatch({ type: flightActionTypes.FETCH_GET_FLIGHTS, payload: response.data })
    } catch (err) {
        console.log(err.message)
    }
}

export const fetchGetFlight = (id) => async (dispatch) => {
    try {
        const response = await $host.get(`/api/flights/${id}`)
        dispatch({ type: flightActionTypes.FETCH_GET_FLIGHT, payload: response.data })
    } catch (err) {
        console.log(err.message)
    }
}

