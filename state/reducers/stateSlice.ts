import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTask: {
        "_id": "",
        "date": "",
        "title": "",
        "description": "",
        "status": "",
        "dueDate": "",
    },
    tasks: []
}

export const stateSlice = createSlice({
    name: "taskState",
    initialState,
    reducers: {
        updateTasks: (state, action) => {
            return {
                ...state,
                tasks: action.payload.tasks
            }
        },
        updateSelectedTask: (state, action) => {
            return {
                ...state,
                selectedTask: action.payload.selectedTask
            }
        },
        removeSelectedTask: () => {
            return initialState
        }
    }
})

export const {updateSelectedTask, removeSelectedTask, updateTasks} = stateSlice.actions;
export default stateSlice.reducer;