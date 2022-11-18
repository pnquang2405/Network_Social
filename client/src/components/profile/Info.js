import React, { useState, useEffect, Profiler } from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Avatar from '../Avatar'
import { getProfileUsers } from '../../redux/actions/profileAction'

const Info = () => {
    const { id } = useParams()
    const {auth, profile} = useSelector(state=>state)
    const dispatch = useDispatch()

    const [userData, setUserData] = useState([])
    // const [onEdit, setOnEdit] = useState(false)

    // const [showFollowers, setShowFollowers] = useState(false)
    // const [showFollowing, setShowFollowing] = useState(false)

    useEffect(() => {
        if(id === auth.user._id){
            setUserData([auth.user])
        }else{
            dispatch(getProfileUsers({users:Profiler.users,id,auth}))
        //     const newData = profile.users.filter(user => user._id === id)
        //     setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])


    // useEffect(() => {
    //     if(showFollowers || showFollowing || onEdit){
    //         dispatch({ type: GLOBALTYPES.MODAL, payload: true})
    //     }else{
    //         dispatch({ type: GLOBALTYPES.MODAL, payload: false})
    //     }
    // },[showFollowers, showFollowing, onEdit, dispatch])
    

    return (
        <div className="info">
            {
                userData.map(user => (
                    <div className="info_container" key={user._id}>
                        <Avatar src={user.avatar} size="supper-avatar" />

                        <div className="info_content">
                            <div className="info_content_title">
                                <h2>{user.username}</h2>
                                <button className="btn btn-outline-info">
                                        Edit Profile
                                </button>
                                {/* {
                                    user._id === auth.user._id
                                    ?  <button className="btn btn-outline-info">
                                        Edit Profile
                                    </button>
                                    
                                    : <FollowBtn user={user} />
                                } */}
                               
                                
                            </div>
                            <div>
                                <span className="mr-4" >
                                        {user.followers.length} Followers
                                </span>
                                <span className="mr-4" >
                                        {user.followers.length} Following
                                </span>
                            </div>

                            <h6>{user.fullname} <span className="text-danger">{user.mobile}</span></h6>
                            <p className="m-0">{user.address}</p>
                            <h6 className="m-0">{user.email}</h6>
                            <a href={user.website} target="_blank" rel="noreferrer">
                                {user.website}
                            </a>
                            <p>{user.story}</p>
                        </div>

                        

                       
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Info
