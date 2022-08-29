import { $authHost, $host } from "../../http";
import { novetlyActionTypes } from "../reducers/noveltyReducer";

export const GetNovetly=()=>async(dispatch)=>{
    try{
        const resp=await $host.get('api/novetly/');
        dispatch({type:novetlyActionTypes.FETCH_GET_NOVETLY,payload:resp.data.res});
    }catch(err){
        console.log(err);
    }
}

export const AddNovetly=(ua,ru,image)=>async()=>{
    try{
        let formData=new FormData();
        let description=[ua,ru].join("//");
        await formData.append("description",description);
        await formData.append("image",image);
        const resp=await $authHost.post("api/novetly/",formData);
        console.log(resp);
        if(resp.data.status==200){
            alert("успішно додано");
        }else alert("error")
    }catch(err){
        alert("error")
        console.log(err);
    }
}