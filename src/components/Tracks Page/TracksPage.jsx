import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFlag, setArtists, setFlag, setTracks } from '../../slices/mySlice'
import Track from './Track'
import "./TracksPage.css"


export default function TracksPage() {


  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)

  useEffect(() => {
    dispatch(clearFlag());
    dispatch(setFlag("top-tracks"));

    fetch("https://api.spotify.com/v1/me/top/tracks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + state.token
      }
    }).then(response => response.json())
      .then(
        data => {
          console.log(data)
          dispatch(setTracks(data.items))
        }
      )
  }, [])

  return (
    <div className='tracks-page-container'>
      <h3>Your Top Tracks</h3>
      {state.tracks.map(obj => {
        return (
          <Track key={obj.id} obj={obj} />
        )
      })}

    </div>
  )
}
