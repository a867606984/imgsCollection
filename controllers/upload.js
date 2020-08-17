
const query = require('./util-db');

class uploadFn {
    constructor() { }
    async uploadImg(env) {
        // console.log('ctx.request.files', env.request.files);
        // console.log('ctx.files', env.files);
        // console.log('ctx.request.body', env.request.body);


        env.set("Access-Control-Allow-Origin", "*");
        
        let {name,path} = env.request.files.file;
        
        //上传的url
        let uploadUrl = path.split('static\\')[1].replace(/\\/g,'/');

        //用于展示的url
        name = 'http://localhost:3000/upload/' + name;

        env.body = {
            code: 200,
            data:{uploadUrl},
            msg: ''
        };
    }

    async saveImg(env) {

        env.set("Access-Control-Allow-Origin", "*");

        let { title,detail,url } = env.request.body;
        

        if(!title && !detail && !url) {
            env.body = {
                code: 500,
                data:"参数不能为空",
                msg: ''
            }
            return
        }

        //关联用户id
        let uploadid = 1;

        await query(`INSERT INTO img_table (title,detail,url,iscollect,uploadid) VALUES ('${title}','${detail}','${url}','0','${uploadid}')`);

        env.body = {
            code: 200,
            data:"",
            msg: ''
        }

    }
}

module.exports = new uploadFn()


