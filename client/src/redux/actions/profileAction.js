import { GLOBALTYPES } from './globalTypes'
import { getDataAPI } from '../../utils/fetchData'

// import { imageUpload } from '../../utils/imageUpload'
// import { createNotify, removeNotify } from '../actions/notifyAction'


export const PROFILE_TYPES = {
    LOADING: 'LOADING_PROFILE',
    GET_USER: 'GET_PROFILE_USER',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    GET_ID: 'GET_PROFILE_ID',
    GET_POSTS: 'GET_PROFILE_POSTS',
    // UPDATE_POST: 'UPDATE_PROFILE_POST'
}


export const getProfileUsers = ({ users, id, auth }) => async (dispatch) => {
    if (users.every(user => user._id !== id)) {
        try {
            dispatch({ type: PROFILE_TYPES.GET_ID, payload: id })
            dispatch({ type: PROFILE_TYPES.LOADING, payload: true })
            console.log(id);
            const res = await getDataAPI(`user/${id}`, auth.token)
            console.log("res", res);

            const res1 = getDataAPI(`/user_posts/${id}`, auth.token)

            const users = res;
            const posts = await res1;
            console.log("users.data tren", res.data);

            dispatch({
                type: PROFILE_TYPES.GET_USER,
                payload: users.data
            })

            dispatch({
                type: PROFILE_TYPES.GET_POSTS,
                payload: { ...posts.data, _id: id, page: 2 }
            })

            dispatch({ type: PROFILE_TYPES.LOADING, payload: false })

        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                // err.response.data.msg
                payload: err.response.data.msg
            })
        }
    }

}






