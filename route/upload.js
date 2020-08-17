const router = require('koa-router')();
const upload = require('../controllers/upload');


module.exports = router.post('/uploadImg', upload.uploadImg).post('/saveImg',upload.saveImg)


