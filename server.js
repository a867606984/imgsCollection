const config = require('./config');
const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const views = require('koa-views');
const path = require('path');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const koaBody = require('koa-body');
const error = require("koa-json-error");
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

//接口错误提示
app.use(
    error({
        postFormat: (e, { stack, ...rest }) =>
            process.env.NODE_ENV === "development" ? rest : { stack, ...rest }
    })
);


//加载静态资源
app.use(static(path.join(__dirname, './static')));

//加载模块
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

////加载post解析、文件上传模块
app.use(koaBody({
    multipart: true,
    formidable: {
      // 上传存放的路径
      uploadDir: path.join(__dirname, "static/upload"),
      // 保持后缀不变
      keepExtensions: true,
      // 文件大小
      maxFileSize: 1024*10,
      onFileBegin: (name, file) => {
        // 取后缀  如：.js  .txt
        const reg = /\.[A-Za-z]+$/g
        const ext = file.name.match(reg)[0] 
  
        // 修改上传文件名
        file.path = path.join(__dirname, "static/upload/") + Date.now() + ext
      },
      onError(err){
        console.log(err)
      }
    }
  }))

//加载路由
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(config.port);