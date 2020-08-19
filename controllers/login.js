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

        env.body = {
            code: 200,
            data: "",
            msg: ''
        };
    }
}

module.exports = new login()