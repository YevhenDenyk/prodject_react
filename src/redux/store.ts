import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
    carReducer
});

const setupStore = ()=> configureStore({
    reducer:rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore["dispatch"]

export {
    setupStore
}
export type {
    RootState,
    AppDispatch,
    AppStore
}