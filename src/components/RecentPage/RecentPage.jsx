import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearFlag, setArtists, setFlag, setRecents } from '../../slices/mySlice';
import Track from '../Tracks Page/Track';
import RecentTrack from './RecentTrack';

export default function RecentPage() {
  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)


  useEffect(() => {
    dispatch(clearFlag());
    dispatch(setFlag("recent"));

    fetch("https://api.spotify.com/v1/me/player/recently-played", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + state.token
      }
    }).then(response => response.json())
      .then(
        data => {
          console.log(data)
          dispatch(setRecents(data.items))
        }
      )
  }, [])
  return (
    <div className='recent-page-container'>
      <h3>Your Recently Played Tracks</h3>
      {state.recents.map(obj => {
        return (
          <RecentTrack key ={obj.played_at} obj={obj}/>
        )
      })}

    </div>
  )
}
