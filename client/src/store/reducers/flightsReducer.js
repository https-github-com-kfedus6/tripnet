export const flightActionTypes = {
    FETCH_POST_FLIGHT: 'FETCH_POST_FLIGHT',
    FETCH_GET_FLIGHTS: 'FETCH_GET_FLIGHTS',
    FETCH_GET_FLIGHT: 'FETCH_GET_FLIGHT',
    FETCH_UPDATE_FLIGHT: 'FETCH_UPDATE_FLIGHT',
    FETCH_DELETE_FLIGHT: 'FETCH_GET_FLIGHT',
    FETCH_ERROR_FLIGHT: 'FETCH_ERROR_FLIGHT',
    FETCH_PUT_FLIGHT_STATUS: 'FETCH_PUT_FLIGHT_STATUS',
    FETCH_PUT_FLIGHT_SCHEDULE_BUS: 'FETCH_PUT_FLIGHT_SCHEDULE_BUS'
}

const initialState = {
    flights: { count: 0, rows: [] },
    flight: [],
    status: [],
    page: 1
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
        case flightActionTypes.FETCH_PUT_FLIGHT_STATUS: {
            return { ...state, status: action.payload }
        }
        default: {
            return state
        }
    }
}