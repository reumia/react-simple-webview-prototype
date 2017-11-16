import { createStore } from 'redux'
import reducerIndex from './reducers'

const store = createStore(reducerIndex)

export default store