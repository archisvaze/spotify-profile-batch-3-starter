import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
initialState = { saved: "" };

const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        save: (state, action) => {
            state.saved = action.payload;
        },
      
    }

})


export const { save } = mySlice.actions;
export default mySlice.reducer;