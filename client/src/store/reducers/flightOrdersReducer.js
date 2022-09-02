export const flightOrdersActionTypes = {
    FETCH_POST_ORDER: "FETCH_POST_ORDER",
    FETCH_GET_ORDER: "FETCH_GET_ORDER",
    FETCH_PUT_ORDER: "FETCH_PUT_ORDER",
    FETCH_DELETE_ORDER: "FETCH_DELETE_ORDER"
}

const initialState = {
    flightOrders: []
}

export const flightOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case flightOrdersActionTypes.FETCH_POST_ORDER: {
            return { ...state, flightOrders: action.payload }
        }
        case flightOrdersActionTypes.FETCH_GET_ORDER: {
            return { ...state, flightOrders: action.payload }
        }
        case flightOrdersActionTypes.FETCH_PUT_ORDER: {
            return { ...state, flightOrders: action.payload }
        }
        case flightOrdersActionTypes.FETCH_DELETE_ORDER: {
            return { ...state, flightOrders: action.payload }
        }
        default: {
            return state
        }
    }
}