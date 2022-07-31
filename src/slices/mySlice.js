import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
if (localStorage.getItem("spotifyState") === null) {
    initialState = { saved: "", token: "", artists: [], flag: "profile", tracks: [], recents :[] }
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
        },
        setFlag: (state, action) => {
            state.flag = action.payload
        },
        clearFlag: (state, action) => {
            state.flag = "";
        },
        setTracks: (state, action) => {
            state.tracks = action.payload
        },
        setRecents : (state, action) =>{
            state.recents = action.payload
        }

    }
})


export const { save, addToken, addUser, setArtists, setFlag, clearFlag, setTracks, setRecents } = mySlice.actions;
export default mySlice.reducer;