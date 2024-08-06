import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTask: {
        _id: "",
        date: "",
        title: "",
        description: "",
        status: "",
        dueDate: "",
    }
}

export const stateSlice = createSlice({
    name: "task-state",
    initialState,
    reducers: {
        updateSelectedTask: (state, action) => {
            return {...state, ...action.payload}
        },
        removeSelectedTask: (state, action) => {
            return initialState
        }
    }
})

export const {updateSelectedTask, removeSelectedTask} = stateSlice.actions;
export default stateSlice.reducer;