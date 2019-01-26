const {query} = require('../utils/db');

let saveUserSocketId = function (userId, socketId) {
    const data = [socketId, userId];
    let _sql = ' UPDATE  user SET socketId = ? WHERE id= ? limit 1 ; ';
    return query(_sql, data);
};

let getUserSocketId  = function(toId){
    let _sql = ' SELECT socketId FROM user WHERE id=? limit 1 ;';
    return query( _sql,toId)
}

module.exports = {
    saveUserSocketId,
    getUserSocketId
};
