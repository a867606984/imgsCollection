const router = require('koa-router')();
const my = require('../controllers/my');

module.exports = router.get('/myCollectImg',my.myCollectImg)
    

