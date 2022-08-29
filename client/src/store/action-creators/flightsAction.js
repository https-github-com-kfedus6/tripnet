import { $authHost, $host } from '../../http/index'
import { flightActionTypes } from "../reducers/flightsReducer";

export const fetchGetFlights = (data) => async (dispatch) => {
    try {
        const response = await $host.get('api/flights/', {
            params: {
                ...data
            }
        });
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
    countFreePlace) => async (dispatch) => {
        try {
            let formData = new FormData();
            await formData.append("image", image);
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
            const resp = await $authHost.post("api/flights/", formData);
            if (resp.data.status == 200) {
                alert("успішно додано");
            } else alert("error");
        } catch (err) {
            alert("error");
            console.log("error");
        }
    }

export const fetchPutFlightStatus = (sheduleBusId, id, status) => async (dispatch) => {
    try {
        const response = await $authHost.put('api/scheduleBusStatus/status', { sheduleBusId, id, status })
        dispatch({ type: flightActionTypes.FETCH_PUT_FLIGHT_STATUS, payload: response.data })
    } catch (err) {
        console.log(err.message)
    }
}

export const fetchPutFlightBusDate = (id, scheduleWith, scheduleTo) => async (dispatch) => {
    try {
        const response = await $authHost.put('api/scheduleBusStatus/', { id, scheduleWith, scheduleTo })
        dispatch({ type: flightActionTypes.FETCH_PUT_FLIGHT_SCHEDULE_BUS, payload: response.data })
    } catch (err) {
        console.log(err.message)
    }
}
/* 
export const AddFlight = (price, startPositionUA, startPositionRU, finishPositionUA, finishPositionRU,
    startDate, finishDate, startTime, finishTime, timeFlightUA, timeFlightRU, countFreePlace, descriptionUA,
    descriptionRU, isWifi, isWC, is220V, isMultimedia, isAirConditioning, image) => async (dispatch) => {
        try {
            let formData = new FormData();
            if (image) await formData.append("image", image);
            await formData.append("price", price);
            await formData.append("startPositionUA", startPositionUA);
            await formData.append("startPositionRU", startPositionRU);
            await formData.append("finishPositionUA", finishPositionUA);
            await formData.append("finishPositionRU", finishPositionRU);
            await formData.append("startDate", startDate);
            await formData.append("finishDate", finishDate)
            await formData.append("startTime", startTime);
            await formData.append("finishTime", finishTime);
            await formData.append("timeFlightUA", timeFlightUA);
            await formData.append("timeFlightRU", timeFlightRU);
            await formData.append("countFreePlace", countFreePlace);
            await formData.append("descriptionUA", descriptionUA);
            await formData.append("descriptionRU", descriptionRU);
            await formData.append("isWifi", isWifi);
            await formData.append("isWC", isWC);
            await formData.append("is220V", is220V);
            await formData.append("isMultimedia", isMultimedia);
            await formData.append("isAirConditioning", isAirConditioning);
            const resp = await $authHost.post("api/flights/", formData);
            console.log(resp);
            if (resp.data.status == 200) {
                alert("успішно додано");
            } else alert("error");
        } catch (err) {
            alert("error");
            console.log("error");
        }
    }
} */
/* 
export const AddFlight = (price,startPositionUA,startPositionRU,finishPositionUA,finishPositionRU,
    startDate,finishDate,startTime,finishTime,timeFlightUA,timeFlightRU,countFreePlace,descriptionUA,
    descriptionRU,isWifi,isWC,is220V,isMultimedia,isAirConditioning,image) => async (dispatch) => {
    try {
        let formData = new FormData();
        if(image)await formData.append("image", image);
        await formData.append("price", price);
        await formData.append("startPositionUA", startPositionUA);
        await formData.append("startPositionRU", startPositionRU);
        await formData.append("finishPositionUA", finishPositionUA);
        await formData.append("finishPositionRU", finishPositionRU);
        await formData.append("startDate", startDate);
        await formData.append("finishDate", finishDate)
        await formData.append("startTime", startTime);
        await formData.append("finishTime", finishTime);
        await formData.append("timeFlightUA", timeFlightUA);
        await formData.append("timeFlightRU", timeFlightRU);
        await formData.append("countFreePlace", countFreePlace);
        await formData.append("descriptionUA",descriptionUA);
        await formData.append("descriptionRU",descriptionRU);
        await formData.append("isWifi",isWifi);
        await formData.append("isWC",isWC);
        await formData.append("is220V",is220V);
        await formData.append("isMultimedia",isMultimedia);
        await formData.append("isAirConditioning",isAirConditioning);
        const resp = await $authHost.post("api/flights/", formData);
        console.log(resp);
        if (resp.data.status == 200) {
            alert("успішно додано");
        } else alert("error");
    } catch (err) {
        alert("error");
        console.log("error");
    }
}
 */
