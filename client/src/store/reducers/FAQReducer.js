export const FAQActionTypes={
    FAQ_GET:"FAQ_GET"
}

const initialState={
    FAQ:undefined
}

export const FAQReducer=(state=initialState,action)=>{
    switch(action.type){
        case FAQActionTypes.FAQ_GET:{
            return {state,FAQ:action.payload};
        }
        default: return state;
    }
}