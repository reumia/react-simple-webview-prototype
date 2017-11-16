import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import './Throbber.scss'

const Throbber = ({ isVisible }) => {

    const classes = classNames({
        'throbber': true,
        'active': isVisible
    })

    return (
        <div className={ classes }>
            트로버
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isVisible: state.throbber.isVisible
    }
}

export default connect(mapStateToProps)(Throbber)