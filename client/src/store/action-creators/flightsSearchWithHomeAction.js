import { flightsSearchWithHomeActionTypes } from "../reducers/flightSearchWithHomeReducer"

export const SetFlightParams=(startPosition,finishPosition,date)=>async(dispatch)=>{
    dispatch({type:flightsSearchWithHomeActionTypes.FETCH_SET_INFO,payload:{startPosition,finishPosition,date}});
}