import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFlag, setArtists, setFlag } from '../../slices/mySlice'
import "./ProfilePage.css"

export default function ProfilePage() {

  let dispatch = useDispatch()
  let state = useSelector(state => state.myState)


  useEffect(() => {
    dispatch(clearFlag());
    dispatch(setFlag("profile"));
  }, [])


  return (
    <div className='profile-page-container'>

    </div>
  )
}
