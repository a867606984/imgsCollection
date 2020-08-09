const router = require('koa-router')();
const home = require('../controllers/home')


module.exports = router.get('/findList', home.findList)
    .get('/updateCollection', home.updateCollection)

