
const query = require('./util-db');
const jwt = require('jsonwebtoken');
const verify = require('./util-jwt');
const { geNowDate } = require('../utils/date');
class uploadFn {
    constructor() { }
    async uploadImg(env) {



        env.set("Access-Control-Allow-Origin", "*");
        if (!env.header || !env.header.cookies) {
            env.body = {
                code: 500,
                data: '',
                msg: '未认证'
            }

            return;
        }

        let { name, path } = env.request.files.file;

        //上传的url
        let uploadUrl = path.split('static\\')[1].replace(/\\/g, '/');

        //用于展示的url
        name = 'http://localhost:3000/upload/' + name;

        env.body = {
            code: 200,
            data: { uploadUrl },
            msg: ''
        };
    }

    async saveImg(env) {
        let { id } = await verify(env.header.authorization);


        env.set("Access-Control-Allow-Origin", "*");

        let { title, detail, url } = env.request.body;


        if (!title && !detail && !url) {
            env.body = {
                code: 500,
                data: "参数不能为空",
                msg: ''
            }
            return
        }


        await query(`INSERT INTO img_table (title,detail,url,iscollect,uploadid,createtime) 
        VALUES ('${title}','${detail}','${url}','0','${id}','${geNowDate('YYYY-MM-DD HH:mm:ss')}')`);

        env.body = {
            code: 200,
            data: "",
            msg: ''
        }

    }
}

module.exports = new uploadFn()


