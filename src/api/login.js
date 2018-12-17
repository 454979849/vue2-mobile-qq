import request from '@/utils/request'

export function login(obj){
    const data={
        userName:obj.userName,
        password:obj.password
    }
    return request({
        method:'post',
        url:'/login',
        data
    })
}