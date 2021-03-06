const config = require('./config');
const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors')
const koajwt = require('koa-jwt');
const static = require('koa-static');
const views = require('koa-views');
const path = require('path');
const koaBody = require('koa-body');
const error = require("koa-json-error");
const routers = require('./route/index');

//跨域
app.use(cors());

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
        maxFileSize: 1024 * 30,
        onFileBegin: (name, file) => {
            // 取后缀  如：.js  .txt
            const reg = /\.[A-Za-z]+$/g
            const ext = file.name.match(reg)[0]

            // 修改上传文件名
            file.path = path.join(__dirname, "static/upload/") + Date.now() + ext
        },
        onError(err) {
            console.log(err)
        }
    }
}))

//加载路由
app.use(routers.routes()).use(routers.allowedMethods());



//验证每个路由加上了token
app.use((ctx, next) => {

    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    })
})

app.use(koajwt({
    secret: 'my_token'
}).unless({
    path: [/\/login\/login/]
}));


app.listen(config.port);