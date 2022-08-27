export const scheduleBusActionTypes = {
    FETCH_POST_SCHEDULE: "FETCH_POST_SCHEDULE",
    FETCH_GET_SCHEDULE: "FETCH_GET_SCHEDULE",
    FETCH_PUT_SCHEDULE: "FETCH_PUT_SCHEDULE",
    FETCH_POST_SCHEDULE_STATUS: "FETCH_POST_SCHEDULE_STATUS",
    FETCH_GET_SCHEDULE_STATUS: "FETCH_GET_SCHEDULE_STATUS",
    FETCH_PUT_SCHEDULE_STATUS: "FETCH_PUT_SCHEDULE_STATUS"
}

const initialState = {
    schedule: [],
    status: []
}

export const scheduleBusReducer = (state = initialState, action) => {
    switch (action.type) {
        case scheduleBusActionTypes.FETCH_POST_SCHEDULE: {
            return { ...state, schedule: action.payload }
        }
        case scheduleBusActionTypes.FETCH_GET_SCHEDULE: {
            return { ...state, schedule: action.payload }
        }
        case scheduleBusActionTypes.FETCH_PUT_SCHEDULE: {
            return { ...state, schedule: action.payload }
        }
        case scheduleBusActionTypes.FETCH_POST_SCHEDULE_STATUS: {
            return { ...state, status: action.payload }
        }
        case scheduleBusActionTypes.FETCH_GET_SCHEDULE_STATUS: {
            return { ...state, status: action.payload }
        }
        case scheduleBusActionTypes.FETCH_PUT_SCHEDULE_STATUS: {
            return { ...state, status: action.payload }
        }
        default: {
            return state
        }
    }
}
