const {query} = require('../utils/db');

let findDataByName = function (name) {
    let _sql = 'SELECT * FROM user WHERE userName= ? '
    return query(_sql, name)
}

let register = function (arr) {
    let _sql = 'INSERT INTO user(userName,password,nickName,isVip,say,userHead,userBg) VALUES(?,?,?,?,?,?,?);'
    return query(_sql, arr)
}

module.exports = {
    findDataByName,
    register
}