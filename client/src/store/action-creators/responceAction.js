import { $host } from "../../http";
import { responceActionTypes } from "../reducers/responceReducer";

export const GetResponceNovetly=(limit)=>async(dispatch)=>{
    try{
        const res=await $host.get("api/responce/getNovetly",{limit});
        if(res.data.status==200){
            dispatch({type:responceActionTypes.FETCH_GET_NOVETLY_RESPONCE,res:res.data.res});
        }
    }catch(err){
        console.log(err);
    }
}