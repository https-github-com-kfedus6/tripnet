import * as ActionCreatorsUser from './userAction';
import * as ActionCreatorsFlights from './flightsAction';
import * as ActionCreatorsNovetly from "./novetlyAction";

export default {
    ...ActionCreatorsUser,
    ...ActionCreatorsFlights,
    ...ActionCreatorsNovetly
};
