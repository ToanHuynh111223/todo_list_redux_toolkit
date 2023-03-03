import { createSlice } from '@reduxjs/toolkit';
const initialState = []
export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
});

// this is for dispatch
export const { addTodo, removeTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;