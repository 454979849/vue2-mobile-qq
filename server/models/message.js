const {query} = require('../utils/db');

let getMessage = function (userid) {
    let _sql = 'SELECT * FROM message WHERE toId= ? '
    return query(_sql, userid)
}

module.exports = {
    getMessage
}