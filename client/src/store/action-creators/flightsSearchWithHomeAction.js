import { flightsSearchWithHomeActionTypes } from "../reducers/flightSearchWithHomeReducer"

export const SetFlightParams=(startPosition,finishPosition,date,sumOld,sumYoung)=>async(dispatch)=>{
    dispatch({type:flightsSearchWithHomeActionTypes.FETCH_SET_INFO,payload:{startPosition,finishPosition,date,sumOld,sumYoung}});
}