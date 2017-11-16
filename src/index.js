import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.scss'
import RouterIndex from './routers'
import store from './stores'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={ store }>
        <RouterIndex />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
