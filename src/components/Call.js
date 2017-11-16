import React from 'react'

import './Call.scss'

const Call = ({ type, className, children }) => {
    const buttonClass = className ? className : 'button'

    return (
        <button className={ buttonClass }>
            { children }
        </button>
    )
}

export default Call