const {query} = require('../utils/db');

let getMessage = function (userId) {
    let _sql = 'SELECT content,fromId,toId,createTime,isRead,userHead,nickName FROM message,user WHERE (message.fromId=? and user.id=message.toId) or (message.toId=? and user.id=message.fromId);'
    return query(_sql, [userId,userId])
}

module.exports = {
    getMessage
}