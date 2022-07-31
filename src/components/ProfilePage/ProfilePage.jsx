import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFlag, setArtists, setFlag } from '../../slices/mySlice'
import "./ProfilePage.css"

export default function ProfilePage() {
  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)
  let user = state.user  

  
  useEffect(() => {
    dispatch(clearFlag());

    dispatch(setFlag("profile"));
  }, [])


  console.log(state)
  return (
    <div className='profile-page-container'>
     <div className="top-profile-container">
       <img className='profile-pic' src={user.images[0].url} alt="" />
       <h1>{user.display_name}</h1>
       <div className="profile-stats">
        <div className='stats-container'>
          <h1 className='stat-nums'>{user.followers.total}</h1>
          <p>FOLLOWERS</p>
        </div>
        <div  className='stats-container'>
        <h1 className='stat-nums'>{user.followers.total}</h1>
          <p>FOLLOWING</p>
        </div>
        <div  className='stats-container'>
        <h1 className='stat-nums'>{user.followers.total}</h1>
          <p>PLAYLIST</p>
        </div>
       </div>
       <button className='profile-btns'>LOGOUT</button>
     </div>
     <div className="bottom-profile-container">
        <div className='profile-top-artists-container' >
           <div className='profile-artist-label' >
            <h3>Top Artists of All time</h3>
            <button className='profile-btns'>SEE MORE</button>
           </div>
        <div className='profile-artists-list' >
           {state.artists.map(ele=>{
             <div className='profile-artists-card' >
            <img src="" alt="" />
            <p></p>
          </div>
           })}
           <div className='profile-artists-card' >
            <img className='artist-pic' src={user.images[0].url} alt="" />
            <p>Artist name</p>
          </div>
        </div>
            </div>
        <div className='profile-top-tracks-container' >
        <div className='profile-tracks-label' >
            <h3>Top Tracks of All time</h3>
            <button className='profile-btns'>SEE MORE</button>
           </div>
           <div className='profile-tracks-list' >
          <div className='profile-tracks-card' >
            <img className='album-pic' src={user.images[0].url} alt="" />
            <div className='track=-detail' >
            <p>Track Name</p>
            <p>Artists of track</p>
            </div>
            <p className='track-length' >3:00</p>
          </div>
        </div>
        </div>
     </div>
    </div>
  )
}
