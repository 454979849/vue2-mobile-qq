import axios from 'axios'

const service = axios.create({
    baseURL: 'http://120.79.192.193:3389/api/qq',
    timeout: 5000
})

export default service
