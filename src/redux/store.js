import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";

const rootReducers = combineReducers({
    carReducer
});

const setupStore = () => configureStore({reducer: rootReducers})

export {setupStore}