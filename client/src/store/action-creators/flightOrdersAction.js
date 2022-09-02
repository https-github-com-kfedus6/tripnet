import { $authHost } from "../../http/index";
import { flightOrdersActionTypes } from "../reducers/flightOrdersReducer";

export const postFlightOrder = (data) => async (dispatch) => {
    try {
        const response = await $authHost.post('api/flightOrder/add', data)
        dispatch({ type: flightOrdersActionTypes.FETCH_POST_ORDER, payload: response.data.res })
    } catch (err) {
        console.log(err.message)
    }
}

export const getFlightOrder = (data) => async (dispatch) => {
    try {
        console.log(data)
        const response = await $authHost.get('api/flightOrder/getOrders', {
            params: {
                ...data
            }
        })
        dispatch({ type: flightOrdersActionTypes.FETCH_GET_ORDER, payload: response.data.res })
    } catch (err) {
        console.log(err.message)
    }
}

export const putFlightOrder = (status, id) => async (dispatch) => {
    try {
        const response = await $authHost.put('api/flightOrder/setStatus', { status, id })
        dispatch({ type: flightOrdersActionTypes.FETCH_PUT_ORDER, payload: response.data.res })
    } catch (err) {
        console.log(err.message)
    }
}

export const deleteFlightOrder = (id) => async (dispatch) => {
    try {
        const response = await $authHost.delete(`api/flightOrder/${id}`)
        dispatch({ type: flightOrdersActionTypes.FETCH_DELETE_ORDER, payload: response.data.res })
    } catch (err) {
        console.log(err.message)
    }
}