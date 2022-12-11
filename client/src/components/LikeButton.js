import React from 'react'
import { useSelector } from 'react-redux'

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
    const { theme } = useSelector(state => state)

    return (
        <>
            {
                isLike
                    ?
                    <span className="material-icons text-danger" onClick={handleUnLike}
                        style={{ fontSize: 30, filter: theme ? 'invert(1)' : 'invert(0)' }}>
                        favorite
                    </span>
                    :
                    <span className="material-icons" style={{ fontSize: 30 }} onClick={handleLike}>
                        favorite_border
                    </span>
            }
        </>
    )
}

export default LikeButton
