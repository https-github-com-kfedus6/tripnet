import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { flightsReducer } from './flightsReducer';
import { novetlyReducer } from "./noveltyReducer"
import { aboutUsReducer } from "./aboutUsReducer";
import { FAQReducer } from './FAQReducer';
import { languageyReducer } from './languageReducer';

export const rootReducers = combineReducers({
    user: userReducer,
    flights: flightsReducer,
    novetly: novetlyReducer,
    aboutUs: aboutUsReducer,
    FAQ: FAQReducer,
    language: languageyReducer
});
