import {combineReducers} from "redux";

import {commentsReducer, postsReducer, usersReducer} from "../reducers";

const reducer = combineReducers({
    postsReducer,
    commentsReducer,
    usersReducer
});

export {reducer}