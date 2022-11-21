import React, { useEffect, useState } from 'react'

import Info from '../../components/profile/Info'
import Posts from '../../components/profile/Posts'

import { useSelector, useDispatch } from 'react-redux'
import LoadIcon from '../../images/loading.gif'
import { getProfileUsers } from '../../redux/actions/profileAction'
import { useParams } from 'react-router-dom'


const Profile = () => {
  const { profile, auth } = useSelector(state => state)
  // const state = useSelector(state => state)
  console.log("profile", profile)

  const dispatch = useDispatch()

  const { id } = useParams()

  // useEffect(() => {
  //   if (profile.ids.every(item => item !== id)) {
  //     dispatch(getProfileUsers({ id, auth }))
  //   }
  // }, [id, auth, dispatch, profile.ids])

  useEffect(() => {
    dispatch(getProfileUsers({ id, auth }))
  }, [id, auth, dispatch])
  return (
    <div className='profile'>
      {
        // profile.loading
        // ? <img src={LoadIcon} alt="loading"/>
        // : <Info/>
        <div className="profile">

          <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />

          {
            auth.user._id === id &&
            <div className="profile_tab">
              <button >Posts</button>
              <button>Saved</button>
            </div>
          }

          {
            profile.loading
              ? <img className="d-block mx-auto" src={LoadIcon} alt="loading" />
              : <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} />

          }

        </div>
      }
      <Info />
    </div>
  )
}

export default Profile
