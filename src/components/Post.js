import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './Post.scss'

const Post = ({ id, title, body, createAt }) => {
    return (
        <div className="post">
            <header className="post-header">
                <div className="post-title">{ title }</div>
                <div className="post-date">{ moment(createAt).format('LL') }</div>
            </header>
            <article className="post-body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    )
}

export default Post

Post.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    createAt: PropTypes.instanceOf(Date)
}