export const flightActionTypes = {
    FETCH_POST_FLIGHT: 'FETCH_POST_FLIGHT',
    FETCH_GET_FLIGHTS: 'FETCH_GET_FLIGHTS',
    FETCH_GET_FLIGHT: 'FETCH_GET_FLIGHT',
    FETCH_UPDATE_FLIGHT: 'FETCH_UPDATE_FLIGHT',
    FETCH_DELETE_FLIGHT: 'FETCH_GET_FLIGHT',
    FETCH_ERROR_FLIGHT: 'FETCH_ERROR_FLIGHT'
}

const initialState = {
    flights: { count: 0, rows: [] },
    flight: [],
    status: []
}

export const flightsReducer = (state = initialState, action,) => {
    switch (action.type) {
        case flightActionTypes.FETCH_GET_FLIGHTS: {
            return { ...state, flights: action.payload }
        }
        case flightActionTypes.FETCH_GET_FLIGHT: {
            return { ...state, flight: action.payload.flight, status: action.payload.status };
        }
        case flightActionTypes.FETCH_DELETE_FLIGHT: {
            return { ...state, flights: state.flights.rows.filter(f => f.id !== action.payload.id) }
        }
        case flightActionTypes.FETCH_UPDATE_FLIGHT: {
            return { ...state, flights: action.payload }
        }
        default: {
            return state
        }
    }
}