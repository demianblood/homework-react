import {configureStore} from '@reduxjs/toolkit'

import carReducer from "./carSlice/car.slice";

const store=configureStore({
    reducer:{
        carReducer
    }
})
export default store