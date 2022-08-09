import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./ArtistsPage.css"
import { changeArtistsFilter, clearFlag, setArtistsLT, setArtistsMT, setArtistsST, setFlag } from "../../slices/mySlice"
import Artist from './Artist'

export default function ArtistsPage() {

  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)

  useEffect(() => {
    dispatch(clearFlag());
    dispatch(setFlag("top-artists"));
      fetch("https://api.spotify.com/v1/me/top/artists?time_range=long_term", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + state.token
        }
      }).then(response => response.json())
        .then(
          data => {
            dispatch(setArtistsLT(data.items))
            
          }
        )
      fetch("https://api.spotify.com/v1/me/top/artists?time_range=medium_term", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + state.token
        }
      }).then(response => response.json())
        .then(
          data => {
            dispatch(setArtistsMT(data.items))
            
          }
        )
      fetch("https://api.spotify.com/v1/me/top/artists?time_range=short_term", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + state.token
        }
      }).then(response => response.json())
        .then(
          data => {
            dispatch(setArtistsST(data.items))
            
          }
        )
  }, [])
  
  return (
    <div className='artists-page-container'>
        <div className='artists-page-label' >
      <h3>Top Artists You Listen</h3>
        <div className="filters">
          <p style={{color: state.artistsFilter==="all time"?"white":"grey"}} onClick={()=>dispatch(changeArtistsFilter('all time'))} >
          All Time
          </p>
          <p style={{color: state.artistsFilter==="last six months"?"white":"grey"}} onClick={()=>dispatch(changeArtistsFilter('last six months'))} >Last six months</p>
          <p style={{color: state.artistsFilter==="last four weeks"?"white":"grey"}} onClick={()=>dispatch(changeArtistsFilter('last four weeks'))} >Last four weeks</p>
        </div>
      </div>
      <div className="artists-container">
        {
        
        state.artists.map(obj => {
          return (
            <a href={obj.external_urls.spotify}>
              
              <Artist key={obj.id} obj={obj} />
            </a>
          )
        })}
      </div>

    </div>
  )
}
