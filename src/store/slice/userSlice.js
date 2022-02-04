import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../service";

const initialState = {
    users: [],
    status: null,
    error: null,
}
export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await userService.getAll();
            return users
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'loading'
            state.users = action.payload
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'full'
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.payload
        }
    }
})

const userReducer = userSlice.reducer;
export const {} = userSlice.actions;
export default userReducer