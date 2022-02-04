import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../service";

const initialState = {
    cars: [],
    status: null,
    error: null,
    carForUpdate: null
}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e)
        }
    }
)
export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, {dispatch}) => {
        try {
            const update = await carService.updateById(id, car)
            dispatch(updCar({id, car: update}))
        } catch (e) {
            console.log(e)
        }
    }
)
export const deleteCarById = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id)
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e)
        }
    }
)

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        updCar: (state, action) => {
            const id = action.payload.id;
            const index = state.cars.findIndex(car => car.id === id);
            state.cars[index] = action.payload.car
            state.carForUpdate = null;

        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        setCarForUpdate: (state, action) => {
            const car = action.payload.car;
            state.carForUpdate = car
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});
const carReducer = carSlice.reducer;

export const {addCar, updCar, deleteCar, setCarForUpdate} = carSlice.actions;
export default carReducer