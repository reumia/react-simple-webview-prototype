import { SHOW_THROBBER, HIDE_THROBBER } from '@/stores/actions'
import { combineReducers } from 'redux'

const throbberInitialState = {
    isVisible: true
}

const throbber = (state = throbberInitialState, action) => {
    switch (action.type) {
        case SHOW_THROBBER:
            return Object.assign({}, state, {
                isVisible: true
            })
        case HIDE_THROBBER:
            return Object.assign({}, state, {
                isVisible: false
            })
        default:
            return state
    }
}

export default combineReducers({
    throbber
})