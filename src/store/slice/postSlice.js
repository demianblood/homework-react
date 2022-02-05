import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../service/postService";

const initialState = {
    posts: [],
    status: null,
    error: null
}
export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await postService.getAll();
            return posts
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers:{
        [getAllPosts.pending]: (state, action) => {
            state.status = 'load'
            state.posts = action.payload
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'full'
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.payload
        }
    }
})
const postReducer = postSlice.reducer;
export default postReducer