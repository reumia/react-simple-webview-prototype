import React from 'react'
import { connect } from 'react-redux'
import Transition from 'react-transition-group/Transition'

import './Throbber.scss'

const duration = 100

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 0, display: 'none' }
}

const Throbber = ({ isVisible }) => {
    return (
        <Transition in={ !isVisible } timeout={ duration }>
            {(state) => (
                <div
                    className='throbber'
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                >
                    트로버
                </div>
            )}
        </Transition>
    )
}

let mapStateToProps = (state) => {
    return {
        isVisible: state.throbber.isVisible
    }
}

export default connect(mapStateToProps)(Throbber)