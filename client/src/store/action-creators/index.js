import * as ActionCreatorsUser from './userAction';
import * as ActionCreatorsFlights from './flightsAction';
import * as ActionCreatorsNovetly from "./novetlyAction";
import * as ActionCreatorsAboutUs from "./aboutUsAction";
import * as ActionCreatorsFAQ from "./FAQAction";
import * as ActionCreatorsLanguage from "./languageAction";

export default {
    ...ActionCreatorsUser,
    ...ActionCreatorsFlights,
    ...ActionCreatorsNovetly,
    ...ActionCreatorsAboutUs,
    ...ActionCreatorsFAQ,
    ...ActionCreatorsLanguage
};
