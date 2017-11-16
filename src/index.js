import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.scss'
import RouterIndex from './routers'
import reducerIndex from './stores/reducers'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducerIndex)

ReactDOM.render(
    <Provider store={ store }>
        <RouterIndex />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
