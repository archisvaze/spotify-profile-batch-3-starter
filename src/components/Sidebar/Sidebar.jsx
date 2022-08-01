import React from 'react';
import "./Sidebar.css";
import spotify from "./spotify.png";
import profile from "./profile.svg"
import mic from "./mic.svg"
import music from "./music.svg"
import recents from "./recents.svg"
import playlist from "./playlist.svg"
import github from "./github.svg"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearFlag } from '../../slices/mySlice';


export default function Sidebar() {

  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)


  return (
    <div style={{ display: state.flag === "login" ? "none" : "flex" }} className='sidebar-container'>
      <Link key={"home"} to={"/"}>
        <img className='top-icon' src={spotify} alt="" />
      </Link>


      <div className="actions-container">

        <Link style={{ textDecoration: "none" }} key={"profile"} to={"/profile"}>
          <button style={{ backgroundColor: state.flag === "profile" ? "rgb(51, 51, 51)" : "black", borderLeft: state.flag === "profile" ? " 7px solid #1cd760" : "none" }} className="profile header-btn">
            <img className='icon' src={profile} alt="" />
            <p className="icon-tag">Profile</p>
          </button>
        </Link>




        <Link style={{ textDecoration: "none" }} key={"top-artists"} to={"/top-artists"} >
          <button style={{ backgroundColor: state.flag === "top-artists" ? "rgb(51, 51, 51)" : "black", borderLeft: state.flag === "top-artists" ? " 7px solid #1cd760" : "none" }} className="top-artists header-btn">
            <img className='icon' src={mic} alt="" />
            <p className="icon-tag">Artists</p>
          </button>
        </Link>


        <Link style={{ textDecoration: "none" }} key={"top-tracks"} to={"/top-tracks"} >
          <button style={{ backgroundColor: state.flag === "top-tracks" ? "rgb(51, 51, 51)" : "black", borderLeft: state.flag === "top-tracks" ? " 7px solid #1cd760" : "none" }} className="top-tracks header-btn">
            <img className='icon' src={music} alt="" />
            <p className="icon-tag">Tracks</p>
          </button>
        </Link>



        <Link style={{ textDecoration: "none" }} key={"recent"} to={"/recent"}>
          <button style={{ backgroundColor: state.flag === "recent" ? "rgb(51, 51, 51)" : "black", borderLeft: state.flag === "recent" ? " 7px solid #1cd760" : "none" }} className="recent header-btn">
            <img className='icon' src={recents} alt="" />
            <p className="icon-tag">Recent</p>
          </button>
        </Link>



        <button style={{ backgroundColor: state.flag === "playlist" ? "rgb(51, 51, 51)" : "black", borderLeft: state.flag === "playlist" ? " 7px solid #1cd760" : "none" }} className="playlist header-btn">
          <img className='icon' src={playlist} alt="" />
          <p className="icon-tag">Playlists</p>
        </button>


      </div>

      <img className='top-icon' src={github} alt="" />

    </div>
  )
}
