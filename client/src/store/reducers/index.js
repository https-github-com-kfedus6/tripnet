import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { flightsReducer } from './flightsReducer';
import { novetlyReducer } from "./noveltyReducer"

export const rootReducers = combineReducers({
    user: userReducer,
    flights: flightsReducer,
    novetly: novetlyReducer
})
