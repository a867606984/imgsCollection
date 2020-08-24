const query = require('./util-db');
const jwt = require('jsonwebtoken');

class login{
    constructor(){}

    async login(env){

        
        let { userName,password } = env.request.body;

        

        if(!userName || !password ){
            env.body = {
                code: 500,
                data: "",
                msg: '参数错误'
            };
            return;
        }

        let result = await query(`SELECT * FROM user_table WHERE username=${userName}`);

        if(Object.keys(result).length === 0){
            env.body = {
                code: 500,
                data: '',
                msg: '密码错误或者该账号未注册'
            };

            return
        }
        
        const token = jwt.sign({

            name:'11111',
            ...result
        },'my_token',{expiresIn:'2h'})

        env.body = {
            code: 200,
            data: token,
            msg: ''
        };
    }
}

module.exports = new login()