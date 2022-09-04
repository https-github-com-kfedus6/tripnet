import { $authHost, $host } from "../../http";
import { messageActionTypes } from "../reducers/messageReducer";
import { responceActionTypes } from "../reducers/responceReducer";

export const GetResponceNovetly=()=>async(dispatch)=>{
    try{
        const res=await $host.get("api/responce/getNovetly");
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
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"успішно виконано"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
        }else {
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"error"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
            console.log(res);
        }
    }catch(err){
        console.log(err);
    }
}

export const DelResponce=(id)=>async(dispatch)=>{
    try{
        const resp=await $authHost.delete("api/responce/delete/"+id);
        if(resp.data.status==200){
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"успішно виконано"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
        }else{
            dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"error"});
            setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
            console.log(resp);    
        }
    }catch(err){
        dispatch({type:messageActionTypes.SET_SHOW_TRUE,payload:"error"});
        setTimeout(()=>dispatch({type:messageActionTypes.SET_SHOW_FALSE}),3000);
        console.log(err);
    }
}