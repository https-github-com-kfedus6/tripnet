import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { flightsReducer } from './flightsReducer';
import { novetlyReducer } from "./noveltyReducer"
import { aboutUsReducer } from "./aboutUsReducer";
import { FAQReducer } from './FAQReducer';
import { languageyReducer } from './languageReducer';
import { infoCompanyReducer } from './infoCompanyReducer';
import { blogReducer } from './blogReducer';
import { flightComfortReducer } from './flightComfortReducer';
import { responceReducer } from "./responceReducer";
import { scheduleBusReducer } from "./scheduleBusReducer";

export const rootReducers = combineReducers({
    user: userReducer,
    flights: flightsReducer,
    novetly: novetlyReducer,
    aboutUs: aboutUsReducer,
    FAQ: FAQReducer,
    language: languageyReducer,
    infoCompany: infoCompanyReducer,
    blog: blogReducer,
    comfort: flightComfortReducer,
    responce: responceReducer,
    scheduleBus: scheduleBusReducer
});
