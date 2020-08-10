const router = require('koa-router')();
const detail = require('../controllers/detail');

module.exports = router.get('/findInfoByid', detail.findInfoByid).post('/addComment', detail.addComment)


