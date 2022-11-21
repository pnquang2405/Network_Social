import { GLOBALTYPES } from './globalTypes'
import { getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { imageUpload } from '../../utils/imageUpload'

// import { createNotify, removeNotify } from '../actions/notifyAction'


export const PROFILE_TYPES = {
    LOADING: 'LOADING_PROFILE',
    GET_USER: 'GET_PROFILE_USER',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    GET_ID: 'GET_PROFILE_ID',
    // GET_POSTS: 'GET_PROFILE_POSTS',
    // UPDATE_POST: 'UPDATE_PROFILE_POST'
}


export const getProfileUsers = ({ users, id, auth }) => async (dispatch) => {
    if (users.every(user => user._id !== id)) {
        try {
            // console.log("1111");
            dispatch({ type: PROFILE_TYPES.LOADING, payload: true })
            // console.log(id);
            const res = await getDataAPI(`user/${id}`, auth.token)
            // console.log(res);

            // const res1 = getDataAPI(`/user_posts/${id}`, auth.token)

            // const users = res;
            // const posts = await res1;
            // console.log(users.data);

            dispatch({
                type: PROFILE_TYPES.GET_USER,
                payload: res.data
            })

            // dispatch({
            //     type: PROFILE_TYPES.GET_POSTS,
            //     payload: {...posts.data, _id: id, page: 2}
            // })

            dispatch({ type: PROFILE_TYPES.LOADING, payload: false })
        }
        // dispatch({ type: PROFILE_TYPES.GET_ID, payload: id })

        catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                // err.response.data.msg
                payload: { error: err.response.data.msg }
            })
        }

    }
}
export const updateProfileUser = ({ userData, avatar, auth }) => async (dispatch) => {
    if (!userData.fullname)
        return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Please add your full name." } })

    if (!userData.fullname.length > 25)
        return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Your full name too long.." } })

    if (!userData.story.length > 200)
        return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Your story too long.." } })

    try {
        let media;
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

        if (avatar) media = await imageUpload([avatar])

        const res = await patchDataAPI("user", {
            ...userData,
            avatar: avatar ? media[0].url : auth.user.avatar
        }, auth.token)

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload:
            {
                ...auth,
                user: {
                    ...auth.user, ...userData,
                    avatar: avatar ? media[0].url : auth.user.avatar,
                }
            }
        })

        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            // err.response.data.msg
            payload: { error: err.response.data.msg }
        })
    }
}






