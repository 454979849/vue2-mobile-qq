import request from '@/utils/request'

export function getFriend(userId){
    return request({
        method:'get',
        url:`/friend?userId=${userId}`
    })
}