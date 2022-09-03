import { $authHost, $host } from "../../http";
import { responceActionTypes } from "../reducers/responceReducer";

export const GetResponceNovetly=(limit)=>async(dispatch)=>{
    try{
        const res=await $host.get("api/responce/getNovetly",{limit});
        if(res.data.status==200){
            dispatch({type:responceActionTypes.FETCH_GET_NOVETLY_RESPONCE,payload:res.data.res});
        }
    }catch(err){
        console.log(err);
    }
}

export const AddResponce=(authorName,description)=>async(dispatch)=>{
    try{
        const res=await $authHost.post("api/responce/add",{authorName,description});
        if(res.data.status==200){
            console.log("успішко виконано");
        }else console.log(res);
    }catch(err){
        console.log(err);
    }
}