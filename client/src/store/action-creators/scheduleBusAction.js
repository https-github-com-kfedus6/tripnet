import { $authHost, $host } from '../../http/index'
import { scheduleBusActionTypes } from "../reducers/scheduleBusReducer";

export const fetchGetScheduleBus = (id) => async (dispatch) => {
    try {
        const response = await $host.get(`api/scheduleBus/${id}`)
        dispatch({ type: scheduleBusActionTypes.FETCH_GET_SCHEDULE, payload: response.data })
    } catch (err) {
        console.log(err)
    }
}