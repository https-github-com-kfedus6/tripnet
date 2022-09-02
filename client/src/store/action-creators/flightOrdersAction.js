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

export const getFlightOrder = () => async (dispatch) => {
    try {
        const response = await $authHost.get('api/flightOrder/getOrders')
        dispatch({ type: flightOrdersActionTypes.FETCH_GET_ORDER, payload: response.data.res })
    } catch (err) {
        console.log(err.message)
    }
}

export const putFlightOrder = (status, id) => async (dispatch) => {
    try {
        const response = await $authHost.put('api/flightOrder/setStatus', { status, id });
        if(response.data.status==200){
            dispatch({ type: flightOrdersActionTypes.FETCH_PUT_ORDER, payload: response.data.res })
        }else console.log(response)
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