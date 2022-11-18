import React from 'react'

import Info from '../../components/profile/Info'
import Posts from '../../components/profile/Posts'

import { useSelector, useDispatch } from 'react-redux'
import LoadIcon from '../../images/loading.gif'

const Profile = () => {
  const { profile, auth } = useSelector(state => state)
  return (
    <div className='profile'>
      {
        profile.loading
        ? <img src={LoadIcon} alt="loading"/>
        : <Info/>
      }
    </div>
  )
}

export default Profile
