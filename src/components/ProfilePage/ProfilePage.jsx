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
       <img src={user.images[0].url} alt="" />
       <h1>{user.display_name}</h1>
       <div className="followers">
        <div>
          <h1>{user.followers.total}</h1>
          <p>FOLLOWERS</p>
        </div>
        <div>
        <h1>{user.followers.total}</h1>
          <p>FOLLOWING</p>
        </div>
        <div>
        <h1>{user.followers.total}</h1>
          <p>PLAYLIST</p>
        </div>
       </div>
       <button>LOGOUT</button>
     </div>
     <div className="bottom-profile-container">
        <div className='profile-top-artists-container' >
           <div className='profile-artist-label' >
            <h3>Top Artists of All time</h3>
            <button>SEE MORE</button>
           </div>
        </div>
        <div className='profile-artists-list' >
          <div className='profile-artists-card' >
            <img src="" alt="" />
            <p></p>
          </div>
        </div>
        <div className='profile-top-tracks-container' >
        <div className='profile-tracks-label' >
            <h3>Top Tracks of All time</h3>
            <button>SEE MORE</button>
           </div>
           <div className='profile-tracks-list' >
          <div className='profile-tracks-card' >
            <img src="" alt="" />
            <p></p>
          </div>
        </div>
        </div>
     </div>
    </div>
  )
}
