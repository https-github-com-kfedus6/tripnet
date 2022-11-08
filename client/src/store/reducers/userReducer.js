export const userActionTypes = {
    REGISTER_USER_ERROR: "REGISTER_USER_ERROR",
    AUTHORIZE_USER_SUCCESSFUL: "AUTHORIZE_USER_SUCCESSFUL",
    NO_AUTHORIZE: "NO_AUTHORIZE",
    GET_PHONE: "GET_PHONE",
    SET_IS_PASSWORD_NULL:"SET_IS_PASSWORD_NULL"
}

const initialState = {
    user: {},
    is_login: false,
    is_admin: false,
    reply: 0,
    telephone: "",
    isPasswordNull:false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.REGISTER_USER_ERROR: {
            return { ...state, reply: action.payload };
        }
        case userActionTypes.AUTHORIZE_USER_SUCCESSFUL: {
            return { ...state, reply: 200, user: action.payload, is_login: true, is_admin: action.payload.isAdmin };
        }
        case userActionTypes.NO_AUTHORIZE: {
            return { ...state, user: {}, is_login: false, is_admin: false };
        }
        case userActionTypes.GET_PHONE: {
            return { ...state, telephone: action.payload };
        }
        case userActionTypes.SET_IS_PASSWORD_NULL:{
            return {...state,isPasswordNull:action.payload};
        }
        default: {
            return state
        }
    }
}