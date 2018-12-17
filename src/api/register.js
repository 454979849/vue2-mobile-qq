import request from '@/utils/request'

export function register(obj){
    const data={
        userName:obj.userName,
        password:obj.password,
        nickName:obj.nickName
    }
    return request({
        method:'post',
        url:'/login',
        data
    })
}