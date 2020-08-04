const router = require('koa-router')();
const upload = require('../controllers/upload');

module.exports = router.get('/',upload)
    

