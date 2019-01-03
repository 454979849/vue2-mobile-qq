const {query} = require('../utils/db');

let getFriend = function (userId) {
    let _sql = 'SELECT idA,idB,inA,inB , nickName,isVip,say,userHead FROM friend,user WHERE (idA=? AND user.id=friend.idB) OR (idB=? AND user.id=friend.idA)'
    return query(_sql, [userId,userId])
};

module.exports = {
    getFriend
};