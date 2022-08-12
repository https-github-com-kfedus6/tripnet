import * as ActionCreatorsUser from './userAction';
import * as ActionCreatorsFlights from './flightsAction';

export default {
    ...ActionCreatorsUser,
    ...ActionCreatorsFlights,
};
