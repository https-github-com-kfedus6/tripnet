import { $authHost, $host } from "../../http"
import { infoCompanyActionTypes } from "../reducers/infoCompanyReducer";

export const GetInfoCompany=()=>async(dispatch)=>{
    try{
        const resp=await $host.get("api/infoCompany/get");
        if(resp.data.status==200){
            dispatch({type:infoCompanyActionTypes.FETCH_GET_INFO_COMPANY,payload:resp.data.infoCompany});
        }
    }catch(err){
        console.log(err);
    }
}

export const SetInfoCompany=(name,email,phone,addressUA,addressRU,openingHoursUA,openingHoursRU)=>async(dispatch)=>{
    try{
        const resp=await $authHost.put("api/infoCompany/update",{name,email,phone,addressUA,addressRU
        ,openingHoursUA,openingHoursRU});
        if(resp.data.status==200){
            console.log("успішно виконано");
        }else console.log("error")
    }catch(err){
        console.log(err);
    }
}