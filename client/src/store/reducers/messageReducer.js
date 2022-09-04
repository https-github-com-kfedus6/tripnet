export const messageActionTypes={
    SET_SHOW_TRUE:"SET_SHOW_TRUE",
    SET_SHOW_FALSE:"SET_SHOW_FALSE"
} 

const initialState={
    text:"",
    isShow:false
}

export const messageReducer=(state=initialState,action)=>{
    switch(action.type){
        case messageActionTypes.SET_SHOW_FALSE:{
            return {...state,isShow:false};
        }
        case messageActionTypes.SET_SHOW_TRUE:{
            return {...state,isShow:true,text:action.payload};
        }
        default: return state;
    }
}