import axios from 'axios'
import { $host } from '../../http/index'
import { flightActionTypes } from "../reducers/flightsReducer";

export const fetchGetFlights = () => async (dispatch) => {
    const response = await axios.get('http://127.0.0.1:8080/api/flights')
    dispatch({ type: flightActionTypes.FETCH_GET_FLIGHT, payload: response.data })
}