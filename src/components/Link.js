import React from 'react'

import './Link.scss'

const Link = ({ url, className, children }) => {
    const buttonClass = className ? className : 'button'

    return (
        <a href={ url } className={ buttonClass }>
            { children }
        </a>
    )
}

export default Link