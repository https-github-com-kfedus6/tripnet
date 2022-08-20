import { $host } from "../../http"
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