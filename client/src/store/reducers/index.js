import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { flightsReducer } from './flightsReducer';

export const rootReducers = combineReducers({
    user: userReducer,
    flights: flightsReducer
})
