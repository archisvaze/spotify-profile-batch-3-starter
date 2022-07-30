import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
// if (localStorage.getItem("spotifyState") === null) {
//     // initialState = initialState = { saved: "", token: "" };
//     initialState = { saved: "", token: "" }
// }
// else {
//     initialState = JSON.parse(JSON.stringify(localStorage.getItem("spotifyState")));
// }


const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        save: (state, action) => {
            state.saved = action.payload;
        },
        addToken :(state,action) =>{
            state.token = action.payload
        }
    }
})


export const { save,addToken } = mySlice.actions;
export default mySlice.reducer;