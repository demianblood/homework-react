import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../service";

const initialState = {
    cars: [],
    status: null,
    error: null,
    updatedCar: null
}
export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const createNewCar = createAsyncThunk(
    'carSlice/createNewCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e)
        }
    }
)
export const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id)
            dispatch(delCar({id}))
        } catch (e) {
            console.log(e)
        }

    }
)
export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, data}, {dispatch}) => {
        try {
            const updatedCar = await carService.update(id, data);
            dispatch(updCar({id, car: updatedCar}))
        } catch (e) {
            console.log(e)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        addCar: ((state, action) => {
            state.cars.push(action.payload.data)
        }),
        delCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        updCar: ((state, action) => {
            const id = action.payload.id;
            const index = state.cars.findIndex(car => car.id === id);
            state.cars[index] = action.payload.car
            state.updatedCar = null;
        }),
        setUpdatedCar: (((state, action) => {
            const car = action.payload.car;
            state.updatedCar = car
        }))
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
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
})
const carReducer = carSlice.reducer;

export const {addCar, delCar, updCar, setUpdatedCar} = carSlice.actions;
export default carReducer

