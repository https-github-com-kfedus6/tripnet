import { $authHost, $host } from '../../http/index'
import { flightComfortActionTypes } from '../reducers/flightComfortReducer'

export const fetchGetFlightComfort = () => async (dispatch) => {
    try {
        const response = await $host.get('api/flightComfort/')
        dispatch({ type: flightComfortActionTypes.FETCH_GET_FLIGHT_COMFORT, payload: response.data })
    } catch (err) {
        console.log(err.message)
    }
}