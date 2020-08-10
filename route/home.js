const router = require('koa-router')();
const home = require('../controllers/home')


module.exports = router.get('/findList', home.findList)
    .post('/updateCollection', home.updateCollection)

