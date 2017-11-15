import React from 'react'

import './Page.scss'

const Page = ({ title, children }) => (
    <div className="page">
        <div className="page-title">{ title }</div>
        <div className="page-body">
            { children }
        </div>
    </div>
)

export default Page