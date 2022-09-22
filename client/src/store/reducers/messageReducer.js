import { t } from "i18next";

export const messageActionTypes = {
    SET_SHOW_TRUE: "SET_SHOW_TRUE",
    SET_SHOW_FALSE: "SET_SHOW_FALSE"
}

const initialState = {
    text: "",
    isShow: false
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case messageActionTypes.SET_SHOW_FALSE: {
            return { ...state, isShow: false };
        }
        case messageActionTypes.SET_SHOW_TRUE: {
            if (action.payload == "успішно виконано") {
                return { ...state, isShow: true, text: t("message.successfully_added") };
            } else return { ...state, isShow: true, text: action.payload };
        }
        default: return state;
    }
}