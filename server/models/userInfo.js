const {query} = require('../utils/db');

let findDataByName = function (name) {
    let _sql = 'SELECT * FROM user WHERE userName= ? '
    return query(_sql, name)
}


module.exports = {
    findDataByName
}