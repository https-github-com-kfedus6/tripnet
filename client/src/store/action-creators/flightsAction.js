import { $authHost, $host } from '../../http/index'
import { flightActionTypes } from "../reducers/flightsReducer";

export const fetchGetFlights = (data) => async (dispatch) => {
    try {
        console.log(data)
        const response = await $host.get('api/flights/', {
            params: {
                ...data
            }
        });
        console.log(response);
        dispatch({ type: flightActionTypes.FETCH_GET_FLIGHTS, payload: response.data.res })
    } catch (err) {
        console.log(err.message)
    }
}

export const fetchGetFlight = (id) => async (dispatch) => {
    try {
        const response = await $host.get(`api/flights/${id}`)
        dispatch({ type: flightActionTypes.FETCH_GET_FLIGHT, payload: response.data.res })
    } catch (err) {
        console.log(err.message)
    }
}

export const fetchDeleteFlight = (id) => async (dispatch) => {
    try {
        const response = await $authHost.delete(`/api/flights/${id}`)
        dispatch({ type: flightActionTypes.FETCH_DELETE_FLIGHT, payload: response.data.res })
    } catch (err) {
        console.log(err.message)
    }
}

export const fetchUpdateFlight = (formData) => async (dispatch) => {
    try {
        const response = await $authHost.put('/api/flights/', formData)
        dispatch({ type: flightActionTypes.FETCH_UPDATE_FLIGHT, payload: response.data.res })
    } catch (err) {
        console.log(err.message)
    }
}

export const AddFlight = (image, nameUA, nameRU, price, startPositionUA, startPositionRU,
    finishPositionUA, finishPositionRU, startDate, finishDate, startTime, finishTime, timeFlight,
    countFreePlace,descriptionUA,descriptionRU) => async (dispatch) => {
        try {
            let formData = new FormData();
            if(image)await formData.append("image", image);
            await formData.append("nameUA", nameUA);
            await formData.append("nameRU", nameRU);
            await formData.append("price", price);
            await formData.append("startPositionUA", startPositionUA);
            await formData.append("startPositionRU", startPositionRU);
            await formData.append("finishPositionUA", finishPositionUA);
            await formData.append("finishPositionRU", finishPositionRU);
            await formData.append("startDate", startDate);
            await formData.append("finishDate", finishDate)
            await formData.append("startTime", startTime);
            await formData.append("finishTime", finishTime);
            await formData.append("timeFlight", timeFlight);
            await formData.append("countFreePlace", countFreePlace);
            await formData.append("descriptionUA",descriptionUA);
            await formData.append("descriptionRU",descriptionRU);
            const resp = await $authHost.post("api/flights/", formData);
            if (resp.data.status == 200) {
                alert("успішно додано");
            } else alert("error");
        } catch (err) {
            alert("error");
            console.log("error");
        }
    }