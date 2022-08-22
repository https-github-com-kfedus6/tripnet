import { $authHost, $host } from "../../http";
import { blogActionTypes } from "../reducers/blogReducer";

export const GetBlogNovetly=(count)=>async(dispatch)=>{
    try{
        const resp=await $host.get("api/blog/getNovetly",{count});
        if(resp.data.status==200){
            dispatch({type:blogActionTypes.FETCH_GET_BLOG_NOVETLY,payload:resp.data.res});
        }
    }catch(err){
        console.log(err);
    }
}

export const GetBlogAll=(page,limit)=>async(dispatch)=>{
    try{
        const resp=await $host.get("api/blog/getAll",{page,limit});
        if(resp.data.status==200){
            dispatch({type:blogActionTypes.FETCH_GET_ALL_BLOG,payload:{page,limit,listBlog:resp.data.res,count:resp.data.count}})
        }
    }catch(err){
        console.log(err);
    }
}

export const GetBlogDescription=(id)=>async(dispatch)=>{
    try{
        const resp=await $host.get("api/blog/getDescription?id="+parseInt(id));
        if(resp.data.status==200){
            dispatch({type:blogActionTypes.FETCH_GET_DESCRIPTION,payload:resp.data.res});
        }
    }catch(err){
        console.log(err);
    }
}

export const AddBlog=(descriptionUa,descriptionRu,image,name)=>async(dispatch)=>{
    try{
        let formData=new FormData();
        await formData.append("image",image);
        await formData.append("descriptionUa",descriptionUa);
        await formData.append("descriptionRu",descriptionRu);
        await formData.append("name",name);
        const resp=await $authHost.post("api/blog/add",formData);
        if(resp.data.status==200){
            alert("успішно додано");
        }else {
            alert("error");
            console.log(resp);
        }
    }catch(err){
    alert("error");
    console.log(err);
    }
}