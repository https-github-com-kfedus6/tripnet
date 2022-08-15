export const flightActionTypes = {
    FETCH_POST_FLIGHT: 'FETCH_POST_FLIGHT',
    FETCH_GET_FLIGHT: 'FETCH_POST_FLIGHT',
    FETCH_ERROR_FLIGHT: 'FETCH_ERROR_FLIGHT'
}

const initialState = {
    flights: []
}

export const flightsReducer = (state = initialState, action,) => {
    switch (action.type) {
        case flightActionTypes.FETCH_GET_FLIGHT: {
            return { ...state, flights: action.payload }
        }
        default: {
            return state
        }
    }
}