var Router = require('koa-router');


const router = new Router();
const baseApi = require('../config').baseApi;


const login = require('../controllers/login');
const register = require('../controllers/register');
const message = require('../controllers/message');
const friend = require('../controllers/friend');
const dialog = require('../controllers/dialog')


router.prefix(`/${baseApi}`);

router.post('/login', login)
    .post('/register', register)
    .get('/message', message)
    .get('/friend', friend)
    .post('/dialog', dialog);


module.exports = router;
