import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTracksFilter, clearFlag, setFlag, setTracksLT, setTracksMT, setTracksST } from '../../slices/mySlice'
import Track from './Track'
import "./TracksPage.css"


export default function TracksPage() {


  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)

  useEffect(() => {
    dispatch(clearFlag());
    dispatch(setFlag("top-tracks"));
    fetch("https://api.spotify.com/v1/me/top/tracks?time_range=long_term", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + state.token
      }
    }).then(response => response.json())
      .then(
        data => {
          dispatch(setTracksLT(data.items))
        }
      )
      fetch("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + state.token
      }
    }).then(response => response.json())
      .then(
        data => {
          dispatch(setTracksMT(data.items))
        }
      )
      fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + state.token
      }
    }).then(response => response.json())
      .then(
        data => {
          dispatch(setTracksST(data.items))
        }
      )
  }, [])

  return (
    <div className='tracks-page-container'>
      <div className='tracks-page-label' >
      <h3>Your Top Tracks</h3>
      <div className="filters">
          <p style={{color: state.tracksFilter==="all time"?"white":"grey"}} onClick={()=>dispatch(changeTracksFilter('all time'))} >
          All Time
          </p>
          <p style={{color: state.tracksFilter==="last six months"?"white":"grey"}} onClick={()=>dispatch(changeTracksFilter('last six months'))} >Last six months</p>
          <p style={{color: state.tracksFilter==="last four weeks"?"white":"grey"}} onClick={()=>dispatch(changeTracksFilter('last four weeks'))} >Last four weeks</p>
        </div>
      </div>
      {state.tracks.map(obj => {
        return (
          
          <Track key={obj.id} obj={obj} />
        )
      })}

    </div>
  )
}
