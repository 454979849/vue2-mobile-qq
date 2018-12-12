import request from '@/utils/request'

export function login(userName,password){
    const data={
        userName,
        password
    }
    return request({
        method:'post',
        url:'/login',
        data
    })
}