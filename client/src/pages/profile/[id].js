import React from 'react'
import LoadIcon from '../../images/loading.gif'
import { useSelector } from 'react-redux'
import Info from '../../components/profile/Info'
import Posts from '../../components/profile/Posts'

const Profile = () => {
  const { profile } = useSelector(state => state)
  return (
    <div className='profile'>
      {
        profile.loading
          ? <img className='d-clock mx-auto my-4' src={LoadIcon} alt="loading" />
          : <Info />
      }

      {/* <Posts /> */}
    </div>
  )
}
export default Profile