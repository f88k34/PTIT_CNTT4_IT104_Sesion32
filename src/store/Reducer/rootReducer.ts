import { combineReducers } from "redux";
import { reducerCounter } from "./reducerCount";
import { reducerStudent } from "./reducerStudent";
import { usersReducer } from "./reducerUsers";
import { currentUserReducer } from "./currentUserReducer";
import { randomReducer } from "./Random";
import { companyReducer } from "./companyReducer"
import { themeReducer } from "./ThemeReduc";
import { authReducer } from "./AuthReduc";
export const rootReducer=combineReducers({
    counts:reducerCounter,
    students:reducerStudent,
    users: usersReducer,
    currentUser: currentUserReducer, 
    randomReducer:randomReducer,
    companyReducer:companyReducer,
    Theme:themeReducer,
    auth:authReducer
})

export type RootState = ReturnType<typeof rootReducer>;