import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import mySlice, { save ,addToken} from "../slices/mySlice"
import ProfilePage from "./ProfilePage/ProfilePage";
import ArtistsPage from "./ArtistsPage/ArtistsPage";
import TracksPage from "./Tracks Page/TracksPage";
import RecentActivityPage from "./RecentActivityPage/RecentActivityPage";
import PlaylistPage from "./PlaylistPage/PlaylistPage";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import "../style.css"
import { useEffect } from "react";
import LoginPage from "./LoginPage/LoginPage";
function App(props){
    let dispatch = useDispatch(mySlice) 
  let state = useSelector(state=>state.myState)
useEffect(()=>{
        localStorage.setItem("spotifyState", JSON.stringify(state))
    }, [state])
let navigate = useNavigate()
useEffect(()=>{
    let url = window.location.hash 
    if(url.includes("#")){
       let token= url.split("=")[1].split("&")[0]
       navigate("/profile")
       dispatch(addToken(token))
       fetch("api.spotify.com/v1/me",{
         method:"GET",
          headers : {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + token
          }
       }).then(response=>response.json()).then((response)=>console.log(response.data))
    }

},[window.location.hash])
    return(
        <div className="app">
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="" element ={
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