import { $host } from '../../http/index'
import { flightActionTypes } from "../reducers/flightsReducer";

export const fetchGetFlights = () => async (dispatch) => {
    try {
        const response = await $host.get('api/flights/')
        dispatch({ type: flightActionTypes.FETCH_GET_FLIGHT, payload: response.data })
    } catch (err) {
        console.log(err.message)
    }
}