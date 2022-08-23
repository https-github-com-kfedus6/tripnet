import { $authHost, $host } from '../../http/index'
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

export const fetchDeleteFlight = (id) => async (dispatch) => {
    try {
        const response = await $authHost.delete(`/api/flights/${id}`)
        dispatch({ type: flightActionTypes.FETCH_DELETE_FLIGHT, payload: response.data })
    } catch (err) {
        console.log(err.message)
    }
}

export const fetchUpdateFlight = (formData) => async (dispatch) => {
    try {
        const response = await $authHost.put('/api/flights/', formData)
        dispatch({ type: flightActionTypes.FETCH_UPDATE_FLIGHT, payload: response.data })
    } catch (err) {
        console.log(err.message)
    }
}

export const AddFlight = (image, name, price, startPosition, finishPosition, startDate, finishDate,
    startTime, finishTime, timeFlight, countFreePlace) => async (dispatch) => {
        try {
            let formData = new FormData();
            await formData.append("image", image);
            await formData.append("name", name);
            await formData.append("price", price);
            await formData.append("startPosition", startPosition);
            await formData.append("finishPosition", finishPosition);
            await formData.append("startDate", startDate);
            await formData.append("finishDate", finishDate)
            await formData.append("startTime", startTime);
            await formData.append("finishTime", finishTime);
            await formData.append("timeFlight", timeFlight);
            await formData.append("countFreePlace", countFreePlace);
            const resp = await $authHost.post("api/flights/", formData);
            if (resp.data.status == 200) {
                alert("успішно додано");
            } else alert("error");
        } catch (err) {
            alert("error");
            console.log("error");
        }
    }