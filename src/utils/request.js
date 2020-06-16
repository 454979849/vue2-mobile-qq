import axios from 'axios'

const service = axios.create({
    baseURL: 'http://123.57.149.125:3389/api/qq',
    timeout: 5000
})

export default service
