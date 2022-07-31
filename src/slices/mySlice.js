import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
if (localStorage.getItem("spotifyState") === null) {
    initialState = { saved: "", token: "", artists: [] }
}
else {
    initialState = JSON.parse(localStorage.getItem("spotifyState"));
}


const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        save: (state, action) => {
            state.saved = action.payload;
        },
        addToken: (state, action) => {
            state.token = action.payload
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        setArtists: (state, action) => {
            state.artists = action.payload;
        }

    }
})


export const { save, addToken, addUser, setArtists } = mySlice.actions;
export default mySlice.reducer;