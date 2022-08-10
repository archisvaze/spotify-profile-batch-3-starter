import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
if (localStorage.getItem("spotifyState") === null) {
    initialState = { saved: "", token: "", artists: [], flag: "profile", tracks: [],artistsAllTime:[],artistsLastSixMonths:[],artistsLastFourWeeks:[],tracksAllTime:[],tracksLastSixMonths:[],tracksLastFourWeeks:[], recents :[],playlists:[] ,artistsFilter:"all time",tracksFilter:"all time"}
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
        setArtistsLT: (state, action) => {
            state.artistsAllTime = action.payload;
        },
        setArtistsMT: (state, action) => {
            state.artistsLastSixMonths = action.payload;
        },
        setArtistsST: (state, action) => {
            state.artistsLastFourWeeks = action.payload;
        },
        setFlag: (state, action) => {
            state.flag = action.payload
        },
        clearFlag: (state, action) => {
            state.flag = "";
        },
        setTracksLT: (state, action) => {
            state.tracksAllTime = action.payload
        },
        setTracksMT: (state, action) => {
            state.tracksLastSixMonths = action.payload
        },
        setTracksST: (state, action) => {
            state.tracksLastFourWeeks = action.payload
        },
        setRecents : (state, action) =>{
            state.recents = action.payload
        },
        setPlaylists : (state, action) =>{
            state.playlists = action.payload
        },
        logout : (state,action)=>{
           state.save= ""
           state.token= ""
           state.playlists= []
           state.recents= []
           state.tracks = []
        },
        changeArtistsFilter:(state,action)=>{
            state.artistsFilter = action.payload
            if(action.payload ==="all time"){
             state.artists =  state.artistsAllTime
         }
         if(action.payload ==="last six months"){
            state.artists =  state.artistsLastSixMonths
        }
        if(action.payload ==="last four weeks"){
            state.artists =  state.artistsLastFourWeeks
        }
        },
        changeTracksFilter:(state,action)=>{
            state.tracksFilter = action.payload
            if(action.payload ==="all time"){
                state.tracks =  state.tracksAllTime
            }
            if(action.payload ==="last six months"){
                state.tracks =  state.tracksLastSixMonths
            }
            if(action.payload ==="last four weeks"){
                state.tracks =  state.tracksLastFourWeeks
            }
           }

    }
})


export const { save, addToken, addUser, setArtists, setFlag, clearFlag, setTracks, setRecents,setPlaylists,logout,changeArtistsFilter,changeTracksFilter,setArtistsMT,setTracksST,setArtistsST,setTracksMT ,setArtistsLT,setTracksLT} = mySlice.actions;
export default mySlice.reducer;