import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slice";

const rootReducers = combineReducers({
    carReducer
});

const setupStore = () => configureStore({reducer: rootReducers})

export {setupStore}