import { $authHost, $host } from "../../http/index";
import { flightOrdersActionTypes } from "../reducers/flightOrdersReducer";
import { messageActionTypes } from "../reducers/messageReducer";

export const postFlightOrder = (data) => async (dispatch) => {
    try {
        const response = await $authHost.post('api/flightOrder/add', data);
        if(response.data.status==200){
            dispatch({ type: flightOrdersActionTypes.FETCH_POST_ORDER, payload: response.data.res })
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"успішно виконано"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
        }else{
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"error"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
        }
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

export const putFlightOrder = (status, id, page, limit, countTicket) => async (dispatch) => {
    try {
        const response = await $authHost.put('api/flightOrder/setStatus', { status, id, page, limit, countTicket });
        console.log(response);
        if(response.data.status==200){
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"успішно виконано"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
            dispatch({ type: flightOrdersActionTypes.FETCH_PUT_ORDER, payload: response.data.res })
        }else {
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"error"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
            console.log(response)
        }
        } catch (err) {
        console.log(err.message)
    }
}

export const deleteFlightOrder = (id) => async (dispatch) => {
    try {
        const response = await $authHost.delete(`api/flightOrder/${id}`)
        if(response.data.status==200){
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"успішно виконано"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
            dispatch({ type: flightOrdersActionTypes.FETCH_DELETE_ORDER, payload: response.data.res })
        }else{
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"error"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
        }
    } catch (err) {
        console.log(err.message)
    }
}
