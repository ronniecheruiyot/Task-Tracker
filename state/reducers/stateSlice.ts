import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTask: {
        "_id": "",
        "date": "",
        "title": "",
        "description": "",
        "status": "",
        "dueDate": "",
    }
}

export const stateSlice = createSlice({
    name: "taskState",
    initialState,
    reducers: {
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

export const {updateSelectedTask, removeSelectedTask} = stateSlice.actions;
export default stateSlice.reducer;