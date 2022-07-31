import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearFlag, setFlag, setPlaylists } from '../../slices/mySlice';
import "./PlaylistPage.css"
export default function PlaylistPage() {
  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)
  useEffect(() => {
    dispatch(clearFlag());
    dispatch(setFlag("playlists"));

    if (state.artists.length <= 0) {
      fetch("https://api.spotify.com/v1/me/playlists", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + state.token
        }
      }).then(response => response.json())
        .then(
          data => {
            console.log(data)
            dispatch(setPlaylists(data.items))
            
          }
        )
    }
  }, [])
  return (
    <div className='playlists-page'>
      <h2>Your Playlists</h2>
      <div className='playlists-container' >
      {state.playlists.map(ele=>{
        return <div className='playlist-card'>
        <img className='playlist-img' src={ele.images[0].url} alt="" />
        <h3>{ele.name}</h3>
        <p>{ele.tracks.total} Tracks</p>
          </div>
      })}
      {state.playlists.map(ele=>{
        return <div className='playlist-card'>
        <img className='playlist-img' src={ele.images[0].url} alt="" />
        <h3>{ele.name}</h3>
        <p>{ele.tracks.total} Tracks</p>
          </div>
      })}
      {state.playlists.map(ele=>{
        return <div className='playlist-card'>
        <img className='playlist-img' src={ele.images[0].url} alt="" />
        <h3>{ele.name}</h3>
        <p>{ele.tracks.total} Tracks</p>
          </div>
      })}
      {state.playlists.map(ele=>{
        return <div className='playlist-card'>
        <img className='playlist-img' src={ele.images[0].url} alt="" />
        <h3>{ele.name}</h3>
        <p>{ele.tracks.total} Tracks</p>
          </div>
      })}
      {state.playlists.map(ele=>{
        return <div className='playlist-card'>
        <img className='playlist-img' src={ele.images[0].url} alt="" />
        <h3>{ele.name}</h3>
        <p>{ele.tracks.total} Tracks</p>
          </div>
      })}
      
      </div>
      </div>
  )
}
