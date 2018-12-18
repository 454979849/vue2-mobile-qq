import request from '@/utils/request'

export function register(obj) {
    const data = {
        userName: obj.userName,
        password: obj.password,
        nickName: obj.nickName,
        userHead: 'http://120.79.192.193/assets/headImgs/defaultHead.jpg',
        userBg: 'http://120.79.192.193/assets/user/userBg.png'
    }
    return request({
        method: 'post',
        url: '/register',
        data
    })
}