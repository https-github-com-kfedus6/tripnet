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

export const fetchPutScheduleBus = (id, scheduleWith, scheduleTo) => async (dispatch) => {
    try {
        const response = await $authHost.put('api/scheduleBus/', { id, scheduleWith, scheduleTo })
        dispatch({ type: scheduleBusActionTypes.FETCH_PUT_SCHEDULE, payload: response.data })
    } catch (err) {
        console.log(err)
    }
}

export const fetchGetScheduleBusStatus = (id) => async (dispatch) => {
    try {
        const response = await $host.get(`api/scheduleBusStatus/${id}`)
        dispatch({ type: scheduleBusActionTypes.FETCH_GET_SCHEDULE_STATUS, payload: response.data })
    } catch (err) {
        console.log(err)
    }
}

export const fetchPutScheduleBusStatus = (id, status) => async (dispatch) => {
    try {
        const response = await $authHost.put('api/scheduleBusStatus/', { id, status })
        dispatch({ type: scheduleBusActionTypes.FETCH_PUT_SCHEDULE_STATUS, payload: response.data })
    } catch (err) {
        console.log(err)
    }
}