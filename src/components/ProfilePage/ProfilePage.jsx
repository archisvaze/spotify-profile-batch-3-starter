import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearFlag, logout, setArtists, setFlag } from '../../slices/mySlice'
import "./ProfilePage.css"

export default function ProfilePage() {
  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)
  let user = state.user

  function convertToMins(ms) {
    let mins = Math.floor(ms / 60000);
    let secs = ((ms % 60000) / 1000).toFixed(0);
    return mins + ":" + (secs < 10 ? "0" : "") + secs;
}
  useEffect(() => {
    dispatch(clearFlag());
    dispatch(setFlag("profile"));
  }, [])

  let navigate = useNavigate()
  console.log(state)
  return (
    <div className='profile-page-container'>
      <div className="top-profile-container">
        <a href={user.external_urls.spotify}>
        <img className='profile-pic' src={user.images[0].url} alt="" />
        </a>
        <h1>{user.display_name}</h1>
        <div className="profile-stats">
          <div className='stats-container'>
            <h1 className='stat-nums'>{user.followers.total}</h1>
            <p>FOLLOWERS</p>
          </div>
          <div className='stats-container'>
            <h1 className='stat-nums'>{user.followers.total}</h1>
            <p>FOLLOWING</p>
          </div>
          <div className='stats-container'>
            <h1 className='stat-nums'>{state.playlists.length}</h1>
            <p>PLAYLIST</p>
          </div>
        </div>
        <button onClick={() => {
          navigate("/")
          dispatch(logout())
        }} className='profile-btns logout'>LOGOUT</button>
      </div>
      <div className="bottom-profile-container">
        <div className='profile-top-artists-container' >
          <div className='profile-artist-label' >
            <h3>Top Artists of All time</h3>
            <button onClick={() => {
              navigate("/top-artists")
            }} className='profile-btns'>SEE MORE</button>
          </div>
          <div className='profile-artists-list' >
            {state.artists.length===0?<p className='empty-status' >Wow such empty</p>:state.artists.map((ele,i) => {
                if(i<5){
              return <a href={ele.external_urls.spotify}>
              <div className='profile-artists-card' >
                <img className='artist-pic' src={ele.images[0].url} alt="" />
                <p>{ele.name}</p>
              </div>

              </a>
              }
              else {
                return null
              }
            })}
            {/* <div className='profile-artists-card' >
              <img className='artist-pic' src={user.images[0].url} alt="" />
              <p>Artist name</p>
            </div> */}
          </div>
        </div>
        <div className='profile-top-tracks-container' >
          <div className='profile-tracks-label' >
            <h3>Top Tracks of All time</h3>
            <button on onClick={() => {
              navigate("/top-tracks")
            }} className='profile-btns'>SEE MORE</button>
          </div>
          <div className='profile-tracks-list' >
            { state.tracks.length===0? <p className='empty-status' >Wow such empty</p>:state.tracks.map((obj,i) => {
              if(i<5){
                return <a href={obj.external_urls.spotify}>
                   <div className='profile-tracks-card' >
                <img className='album-pic' src={obj.album.images[0].url} alt="" />
                <div className='track-detail' >
                  <p>{obj.name}</p>
                  <p> {obj.artists.map(object => {
                    return (
                      <span className="track-artist-name">{object.name}</span>
                      )
                    })}</p>
                </div>
                <p className='track-length' >{convertToMins(obj.duration_ms)}</p>
              </div>
                    </a>
              }
              else {
                return null
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
