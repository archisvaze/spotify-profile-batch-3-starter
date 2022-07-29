import React from 'react'
import { useDispatch } from 'react-redux'
import mySlice from '../../slices/mySlice'
import "./LoginPage.css"
const CLIENT_ID = "6e26e74044fa468d81eabcf6fea33e9b"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const CLIENT_SECRET = "f764b0ca59bb4ccb91d81d3ede3237c7"
export default function LoginPage() {
    // let dispatch = useDispatch(mySlice)
  return (
    <div className='login-page' >
        <h1 className='login-label' >Spotify Profile</h1>
        <button
        //  onClick={useDispatch("login")}
          className='login-btn'>
            
            Login to spotify
            </button>

    </div>
  )
}
