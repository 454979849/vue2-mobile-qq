const {query} = require('../utils/db');

let getMessage = function (userId) {
    let _sql = 'SELECT * FROM message WHERE toId= ? or fromId= ?'
    return query(_sql, [userId,userId])
}

module.exports = {
    getMessage
}