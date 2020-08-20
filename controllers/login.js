const query = require('./util-db');

class login{
    constructor(){}

    async login(env){

        let { userName,password } = env.request.body;

        console.log(env.session)
        console.log(password)
        console.log(userName)

        env.set("Access-Control-Allow-Origin", "*");
        

        if(!userName || !password ){
            env.body = {
                code: 500,
                data: "",
                msg: '参数错误'
            };
            return;
        }

        let session = env.session
            session.isLogin = true
            session.userName = userName
            session.userId = 1

        // env.cookies.set(
        //     'session', 
        //     'hello world',
        //     {
        //         domain: 'localhost',  // 写cookie所在的域名
        //         path: '/',       // 写cookie所在的路径
        //         maxAge: 10 * 60 * 1000, // cookie有效时长
        //         expires: new Date('2017-02-15'),  // cookie失效时间
        //         httpOnly: false,  // 是否只用于http请求中获取
        //         overwrite: false  // 是否允许重写
        //     }
        // )

        env.body = {
            code: 200,
            data: session,
            msg: ''
        };
    }
}

module.exports = new login()