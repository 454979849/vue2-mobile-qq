const db = {
    host: '120.79.192.193', // 数据库IP
    port: 3306, // 数据库端口
    database: 'qq', // 数据库名称
    user: 'imooc', // 数据库用户名
    password: 'sdfLKJ`12', // 数据库密码
}
const baseApi = 'api/qq'

const secret = 'airchat-sec'

module.exports = {
    db,
    baseApi,
    secret
}