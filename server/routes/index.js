var Router = require('koa-router');


const router = new Router()
const baseApi = require('../config').baseApi


const login = require('../controllers/login')


router.prefix(`/${baseApi}`)

router.post('/login', login)
    .get('/aaa', (ctx, next) => {
        ctx.body = {
            success: true,
            message: '测试get请求'
        }
    })


module.exports = router
