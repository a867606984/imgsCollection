const Router = require('koa-router');
const router = new Router();
const fs = require('fs');

const home = require('./home');
const login = require('./login');
const detail = require('./detail');
const my = require('./my');
const upload = require('./upload');


router.use("/home", home.routes()).use(home.allowedMethods());
router.use("/login", login.routes(), login.allowedMethods());
router.use("/detail", detail.routes(), detail.allowedMethods());
router.use("/my", my.routes(), my.allowedMethods());
router.use("/upload", upload.routes(), upload.allowedMethods());

module.exports = router

