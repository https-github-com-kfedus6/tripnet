import { messageActionTypes } from "../reducers/messageReducer"

export const SetShowMessgeTrue=(text)=>async(dispatch)=>{
    dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:text});
}

export const SetShowMessgeFalse=()=>async(dispatch)=>{
    dispatch({type:messageActionTypes.SET_SHOW_FALSE});
}