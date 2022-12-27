import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    car: null,
    loading: false,
    errors: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    'deleteCar/carSlice',
    async (id, {rejectWithValue}) => {
        try {
            await carService.delete(id)
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const createCar = createAsyncThunk(
    'createCar/carSlice',
    async (obj, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(obj);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateCar = createAsyncThunk(
    'updateCar/carSlice',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.update(id, car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCar: (state, action) => {
            state.car = action.payload
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload)
                state.cars.splice(index, 1)
            })
            .addCase(createCar.fulfilled, (state, action) => {
                // state.cars = [...state.cars, action.payload]
                state.cars.push(action.payload)
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                const findCar = state.cars.find(car => car.id === action.payload.id);
                Object.assign(findCar, action.payload)
                // на місце знайденого об'єкта впроваджуємо новий
                state.carForUpdate = null
                //обнуляємо стейт після апдейту для оновлення кнопки
            })
            .addDefaultCase((state, action) => {
                const [pathsElement] = action.type.split('/').splice(-1);
                if (pathsElement === 'rejected') {
                    state.errors = action.payload
                    state.loading = false
                } else {
                    state.errors = null
                }
            })
})

const {reducer: carReducer, actions: {setCar, setCarForUpdate}} = carSlice

const cartAction = {
    getAll,
    setCar,
    deleteCar,
    createCar,
    updateCar,
    setCarForUpdate
}

export {
    carReducer,
    cartAction
}