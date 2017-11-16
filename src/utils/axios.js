import axios from 'axios'
import store from '@/stores'
import { hideThrobber } from '@/stores/actions'

/**
 * Default Properties
 * @type {{baseURL: string}}
 */
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

/**
 * Global Error Handling
 */
axios.interceptors.response.use(
    (res) => {
        store.dispatch(hideThrobber())

        return Promise.resolve(res)
    },
    (err) => {
        if (err.status === 401) console.warn('UNAUTHORIZED')

        return Promise.reject(err)
    }
);

export default axios