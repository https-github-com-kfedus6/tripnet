import { $host } from "../../http";
import { FAQActionTypes } from "../reducers/FAQReducer";

export const GetFAQ=()=>async(dispatch)=>{
    try{
        const resp=await $host.get("api/FAQ/get");
        if(resp.data.status==200){
            dispatch({type:FAQActionTypes.FAQ_GET,payload:resp.data.res});
        }
    }catch(err){
        console.log(err);
    }
}