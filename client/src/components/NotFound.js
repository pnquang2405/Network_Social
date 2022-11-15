import React from 'react'

const NotFound = () => {
    return (
        <div className="position-relative" style={{minHeight: 'calc(100vh - 70ox)'}}>
            <h2 className="position-absolute text-secondary"
                style={{top: '50%', left: '50%'}}>
                404 | NotFound.
            </h2>
        </div>
    )
}

export default NotFound