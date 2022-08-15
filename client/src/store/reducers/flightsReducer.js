export const flightActionTypes = {
    FETCH_POST_FLIGHT: 'FETCH_POST_FLIGHT',
    FETCH_GET_FLIGHT: 'FETCH_POST_FLIGHT',
    FETCH_GET_CURRENCY: 'FETCH_API_GET_CURRENCY',
    FETCH_ERROR_FLIGHT: 'FETCH_ERROR_FLIGHT'
}

const initialState = {
    flights: [],
    currency: []
}

export const flightsReducer = (state = initialState, action,) => {
    switch (action.type) {
        case flightActionTypes.FETCH_GET_FLIGHT: {
            return { ...state, flights: action.payload }
        }
        case flightActionTypes.FETCH_GET_CURRENCY: {
            return { ...state, currency: action.payload }
        }
        default: {
            return state
        }
    }
}