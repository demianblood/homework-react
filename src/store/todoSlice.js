import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toDos: []
}

const todoSlice = createSlice(
    {
        name: 'todoSlice',
        initialState,
        reducers: {
            addToDo: ((state, action) => {
                state.toDos.push(action.payload)
            }),
            dellTodo: (((state, action) => {

                // const index = state.toDos.findIndex(todo => todo.id === action.payload.id);
                // state.toDos.splice(index,1);

                state.toDos = state.toDos.filter(todo => todo.id !== action.payload.id)
            })),
            completeTodo: ((state, action) => {
                const todo = state.toDos.find(todo => todo.id === action.payload.id);
                todo.status = !todo.status;
            })

        }
    }
)
const todoReducer = todoSlice.reducer;
export const {addToDo, dellTodo,completeTodo} = todoSlice.actions;
export default todoReducer