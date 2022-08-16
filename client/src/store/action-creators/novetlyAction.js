import { $host } from "../../http";
import { novetlyActionTypes } from "../reducers/noveltyReducer";

export const GetNovetly=(data)=>async(dispatch)=>{
    try{
        const resp=await $host.get('api/novetly/');
        dispatch({type:novetlyActionTypes.FETCH_GET_NOVETLY,payload:resp.data.res});
    }catch(err){
        console.log(err);
    }
}