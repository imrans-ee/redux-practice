import counterReducer from "./counter";
import loggedReducer from "./isLogin"

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter:counterReducer,
    isLogin:loggedReducer,
})

export default allReducers;