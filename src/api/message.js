import request from '@/utils/request'

export function getMessage(userId){
    return request({
        method:'get',
        url:`/message?userId=${userId}`
    })
}