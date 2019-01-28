import request from '@/utils/request'

export function sendMessage(content, fromId, toId, createTime, isRead) {
    return request({
        method: 'post',
        url: '/dialog',
        data: {
            content, fromId, toId, createTime, isRead
        }
    })
}

export function setIsRead(fromId, toId) {
    return request({
        method: 'post',
        url: '/setIsRead',
        data: {
            fromId, toId
        }
    })
}
