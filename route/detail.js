const router = require('koa-router')();
const detail = require('../controllers/detail');

module.exports = router.get('/',detail)
    

