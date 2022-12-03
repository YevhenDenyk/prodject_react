import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {commentsReducer, postReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    commentsReducer
});

const setupStore = () => configureStore({reducer: rootReducer});

export {setupStore}