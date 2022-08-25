export const flightComfortActionTypes = {
    FETCH_POST_FLIGHT_COMFORT: 'FETCH_POST_FLIGHT_COMFORT',
    FETCH_GET_FLIGHT_COMFORT: 'FETCH_GET_FLIGHT_COMFORT'
}

const initialState = {
    flightComfort: []
}

export const flightComfortReducer = (state = initialState, action) => {
    switch (action.type) {
        case flightComfortActionTypes.FETCH_POST_FLIGHT_COMFORT: {
            return { ...state, flightComfort: action.payload }
        }
        case flightComfortActionTypes.FETCH_GET_FLIGHT_COMFORT: {
            return { ...state, flightComfort: action.payload }
        }
        default: {
            return state
        }
    }
}