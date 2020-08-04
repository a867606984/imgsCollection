const config = require('./config');
const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const views = require('koa-views');
const path = require('path');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const Router = require('koa-router');
const routers = require('./route/index');

//session存储配置
const sessionMysqlConfig = {
    user: config.user,
    password: config.password,
    database: config.database,
    host: config.database,
}

//配置session中间件
// app.use(session({
//     key: 'USER_ID',
//     store: new MysqlStore(sessionMysqlConfig)
// }))

//加载post解析
app.use(bodyparser());

//加载静态资源
app.use(static(path.join(__dirname, './static')));

//加载模块
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))



//加载路由
app.use(routers.routes(), routers.allowedMethods());

app.listen(config.port);