import axios from 'axios'

/**
 * Default Properties
 * @type {{baseURL: string}}
 */
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

/**
 * Global Error Handling
 */
axios.interceptors.response.use(null, function(err) {
    if (err.status === 401) console.warn('UNAUTHORIZED')

    return Promise.reject(err)
});

export default axios