const {query} = require('../utils/db');

let findDataByName = function (name) {
    let _sql = 'SELECT * FROM user WHERE userName = ? '
    return query(_sql, name)
}

let setUserLoginStatus=function(id){
    let _sql='UPDATE user SET isLogin = 1 WHERE id = ?'
    return query(_sql,id);
}

let setUserLogoutStatus=function(id){
    let _sql='UPDATE user SET isLogin = 0 WHERE id = ?'
    return query(_sql,id);
}

let register = function (arr) {
    let _sql = 'INSERT INTO user(userName,password,nickName,isVip,say,userHead,userBg) VALUES(?,?,?,?,?,?,?);'
    return query(_sql, arr)
}
module.exports = {
    findDataByName,
    setUserLoginStatus,
    setUserLogoutStatus,
    register
}