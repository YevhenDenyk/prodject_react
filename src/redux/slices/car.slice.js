import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    car: null,
    loading: false,
    error: false
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWitsValue,})=>{
        try {
            const {data} = await carService.getAll()
            return data
        }catch (e){
            return rejectWitsValue(e.response.data)
        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: bilder =>
        bilder
            .addCase(getAll.fulfilled,(state, action) => {
                state.cars = action.payload
            })
})

const {reducer:carReducer, actions} = carSlice

const cartAction = {
    getAll
}

export {
    carReducer,
    cartAction
}