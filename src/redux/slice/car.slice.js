import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    loading: false
}

const getCars = createAsyncThunk(
    'carSlice/getCars',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async (car,{rejectWithValue})=>{
        try {
            const {data} = await carService.create(car);
            return data
        }catch (e) {
            rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async (id, {rejectWithValue}) => {
        try {
            await carService.delete(id)
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id,car},{rejectWithValue})=>{
        try {
            const {data} = await carService.update(id,car);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getCars.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addCase(getCars.pending,(state, action) => {
                state.loading = true
            })
            .addCase(createCar.fulfilled,(state, action) => {
                state.cars.push(action.payload)
                state.loading = false
            })
            .addCase(createCar.pending,(state, action) => {
                state.loading = true
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car=> car.id === action.payload);
                state.cars.splice(index,1)
                state.loading = false
            })
            .addCase(deleteCar.pending,(state, action) => {
                state.loading = true
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                const findCar = state.cars.find(car => car.id === action.payload.id);
                Object.assign(findCar,action.payload)
                state.carForUpdate = null
                state.loading = false
            })
            .addCase(updateCar.pending,(state, action) => {
                state.loading = true
            })
            .addDefaultCase((state, action) => {
                const [pathsElement] = action.type.split('/').splice(-1);
                if (pathsElement === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })
})

const {reducer: carReducer, actions: {getCarForUpdate}} = carSlice;

const carAction = {
    getCarForUpdate,
    getCars,
    createCar,
    deleteCar,
    updateCar
}

export {carReducer, carAction}