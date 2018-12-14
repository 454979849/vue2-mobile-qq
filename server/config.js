const db = {
    host: 'localhost', // 数据库IP
    port: 3306, // 数据库端口
    database: 'qq', // 数据库名称
    user: 'root', // 数据库用户名
    password: '123456', // 数据库密码
}
const baseApi = 'api/qq'

const secret = 'airchat-sec'

module.exports = {
    db,
    baseApi,
    secret
}