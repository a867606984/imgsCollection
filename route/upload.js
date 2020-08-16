const router = require('koa-router')();
const upload = require('../controllers/upload');
const path = require('path')

const multer = require('@koa/multer');
const uploadObj = multer({ dest: '/images' });

module.exports = router.post('/uploadImg', uploadObj.single('file'), upload.uploadImg)


