import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import mySlice from '../../slices/mySlice'
import "./LoginPage.css"
const CLIENT_ID = "6e26e74044fa468d81eabcf6fea33e9b"
const REDIRECT_URI = "http://localhost:3000/callback"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const CLIENT_SECRET = "f764b0ca59bb4ccb91d81d3ede3237c7"

export default function LoginPage() {

  const state = useSelector(state => state.myState)
  console.log(state)




  return (
    <div className='login-page' >
      <h1 className='login-label' >Spotify Profile</h1>
      <a className='login-btn' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
        Login to Spotify
      </a>

    </div>
  )
}
