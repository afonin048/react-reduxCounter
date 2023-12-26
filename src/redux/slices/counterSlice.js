import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export default countSlice.reducer;
export const {decrement, increment, reset} = countSlice.actions;
