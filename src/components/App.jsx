import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToken, addUser } from "../slices/mySlice"
import ProfilePage from "./ProfilePage/ProfilePage";
import ArtistsPage from "./ArtistsPage/ArtistsPage";
import TracksPage from "./Tracks Page/TracksPage";
import RecentActivityPage from "./RecentActivityPage/RecentActivityPage";
import PlaylistPage from "./PlaylistPage/PlaylistPage";
import Sidebar from "./Sidebar/Sidebar";
import "../style.css"
import { useEffect } from "react";
import LoginPage from "./LoginPage/LoginPage";



function App(props) {

    let dispatch = useDispatch()
    let state = useSelector(state => state.myState)

    useEffect(() => {
        localStorage.setItem("spotifyState", JSON.stringify(state))
    }, [state])


    let navigate = useNavigate()

    useEffect(() => {
        let url = window.location.hash
        if (url.includes("#")) {
            let token = "";
                token = url.split("=")[1].split("&")[0]
                dispatch(addToken(token))
           
            fetch("https://api.spotify.com/v1/me/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + token
                }
            }).then(response => response.json())
                .then(
                    data => {
                        console.log(data)
                        dispatch(addUser(data))
                        navigate("/profile")
                    }

                )
        }

    }, [window.location.hash])

    return (
        <div className="app">
            <Sidebar />
            <Routes>
                <Route path="/" element={<LoginPage />} />

                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/top-artists" element={<ArtistsPage />} />
                <Route path="/top-tracks" element={<TracksPage />} />
                <Route path="/Recent-activity" element={<RecentActivityPage />} />
                <Route path="/Playlists" element={<PlaylistPage />} />

            </Routes>
        </div>
    )
}

export default App;