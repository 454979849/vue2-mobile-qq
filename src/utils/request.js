import axios from 'axios'

const service = axios.create({
    baseURL: 'http://192.168.1.62:3000/api/qq',
    timeout: 5000
})

export default service
