import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./slice/car.slice";
import userReducer from "./slice/userSlice";
import postReducer from "./slice/postSlice";
import commentReducer from "./slice/commentsSlice";


const store = configureStore({
    reducer: {
        cars: carReducer,
        users: userReducer,
        posts: postReducer,
        comments: commentReducer
    }
});

export default store