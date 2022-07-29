import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
if (localStorage.getItem("spotifyState") === null) {
    initialState = initialState = { saved: "", token: "" };
}
else {
    initialState = JSON.parse(JSON.stringify(localStorage.getItem("spotifyState")));
}


const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        save: (state, action) => {
            state.saved = action.payload;
        },
        setToken

    }

})


export const { save } = mySlice.actions;
export default mySlice.reducer;