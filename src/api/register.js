import request from '@/utils/request'

export function register(obj) {
    const data = {
        userName: obj.userName,
        password: obj.password,
        nickName: obj.nickName,
        userHead: 'http://123.57.149.125/assets/headImgs/defaultHead.jpg',
        userBg: 'http://123.57.149.125/assets/user/userBg.png'
    }
    return request({
        method: 'post',
        url: '/register',
        data
    })
}