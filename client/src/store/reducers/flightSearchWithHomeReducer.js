export const flightsSearchWithHomeActionTypes={
    FETCH_SET_REALITY:"FETCH_SET_REALITY",
    FETCH_SET_INFO:"FETCH_SET_INFO"
}

const initialState={
    startPositionInitial:"",
    finishPositionInitial:"",
    dateInitial:"",
}

export const flightsSearchWithHomeReducer=(state=initialState,action)=>{
    switch(action.type){
        case flightsSearchWithHomeActionTypes.FETCH_SET_INFO:{
            return {...state,startPositionInitial:action.payload.startPosition,finishPositionInitial:action.payload.finishPosition,
                dateInitial:action.payload.date}
        }
        default: return state;
    }
}