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


export default function Sidebar() {
  return (
    <div className='header-container'>
      <img className='top-icon' src={spotify} alt="" />

      <div className="actions-container">


        <button className="profile header-btn">
          <img className='icon' src={profile} alt="" />
          <p className="icon-tag">Profile</p>
        </button>


        <Link key={"top-artists"} to={"/top-artists"} >
          <button className="top-artists header-btn">
            <img className='icon' src={mic} alt="" />
            <p className="icon-tag">Top Artists</p>
          </button>
        </Link>



        <button className="top-tracks header-btn">
          <img className='icon' src={music} alt="" />
          <p className="icon-tag">Top Tracks</p>
        </button>



        <button className="recent header-btn">
          <img className='icon' src={recents} alt="" />
          <p className="icon-tag">Recent</p>
        </button>



        <button className="playlist header-btn">
          <img className='icon' src={playlist} alt="" />
          <p className="icon-tag">Playlists</p>
        </button>


      </div>

      <img className='top-icon' src={github} alt="" />

    </div>
  )
}
