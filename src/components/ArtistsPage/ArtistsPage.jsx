import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./ArtistsPage.css"
import { clearFlag, setArtists, setFlag } from "../../slices/mySlice"
import Artist from './Artist'

export default function ArtistsPage() {

  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)


  useEffect(() => {
    dispatch(clearFlag());
    dispatch(setFlag("top-artists"));


    fetch("https://api.spotify.com/v1/me/top/artists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + state.token
      }
    }).then(response => response.json())
      .then(
        data => {
          console.log(data)
          dispatch(setArtists(data.items))
          console.log(state.artists)
        }
      )
  }, [])

  return (
    <div className='artists-page-container'>
      <h3>Top Artists You Listen</h3>
      <div className="artists-container">
        {state.artists.map(obj => {
          return (
            <Artist key={obj.id} obj={obj} />
          )
        })}
      </div>

    </div>
  )
}
