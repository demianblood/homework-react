import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../../service/commentsService";

const initialState = {
    comments: [],
    status: null,
    error: null
}
export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            const comments = await commentService.getAll();
            return comments
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers:{
        [getAllComments.pending]: (state, action) => {
            state.status = 'loading'
            state.users = action.payload
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fullFill'
            state.users = action.payload
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.payload
        }}

})
const commentReducer = commentSlice.reducer;
export default commentReducer