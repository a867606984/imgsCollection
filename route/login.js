const router = require('koa-router')();
const login = require('../controllers/login');

module.exports = router.post('/login',login.login)

