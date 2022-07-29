import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { save } from "../slices/mySlice"
import LoginPage from "./LoginPage/LoginPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import ArtistsPage from "./ArtistsPage/ArtistsPage";
import TracksPage from "./Tracks Page/TracksPage";
import RecentActivityPage from "./RecentActivityPage/RecentActivityPage";
import PlaylistPage from "./PlaylistPage/PlaylistPage";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import "../style.css"
function App(props){

const dispatch = useDispatch();
const state = useSelector(state => state.myState)

    return(
        <div className="app">
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route element ={
            <div>
             <HeaderComponent/>
            <Routes>
            <Route path="/profile" element ={<ProfilePage/>} />
            <Route path="/top-artists" element ={<ArtistsPage/>}/>
            <Route path="/top-tracks" element ={<TracksPage/>}/>
            <Route path="/Recent-activity" element ={<RecentActivityPage/>}/>
            <Route path="/Playlists" element ={<PlaylistPage/>}/>  
            </Routes>
            </div>
            }/>
           
        </Routes>
        </div>
    )
}

export default App;