export const blogActionTypes={
    FETCH_GET_ALL_BLOG:"FETCH_GET_ALL_BLOG",
    FETCH_GET_BLOG_NOVETLY:"FETCH_GET_BLOG_NOVETLY",
    FETCH_GET_DESCRIPTION:"FETCH_GET_DESCRIPTION"
}

const initialState={
    listBlog:undefined,
    page:1,
    limit:10,
    selectBlog:undefined,
    blogNovetly:[],
    countBlog:0
};

export const blogReducer=(state=initialState,action)=>{
    switch(action.type){
        case blogActionTypes.FETCH_GET_ALL_BLOG:{
            return {...state,page:action.payload.page,limit:action.payload.limit,listBlog:action.payload.listBlog,countBlog:action.payload.count};
        }
        case blogActionTypes.FETCH_GET_BLOG_NOVETLY:{
            return {...state,blogNovetly:action.payload};
        }
        case blogActionTypes.FETCH_GET_DESCRIPTION:{
            return {...state,selectBlog:action.payload};
        }
        default: return state;
    }
}