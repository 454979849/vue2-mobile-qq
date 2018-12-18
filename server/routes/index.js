var Router = require('koa-router');


const router = new Router()
const baseApi = require('../config').baseApi


const login = require('../controllers/login')
const register =require('../controllers/register')


router.prefix(`/${baseApi}`)

router.post('/login', login)
    .post('/register',register)
    .get('/aaa', (ctx, next) => {
        ctx.body = {
            success: true,
            message: '测试get请求'
        }
    })


module.exports = router
