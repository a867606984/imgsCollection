const query = require('./util-db');
const verify = require('./util-jwt');

class detail {
    constructor() { }
    async findInfoByid(env) {
        let verifyResult = null;

        let params = {
            isAuth: false,
            username: "",
            headimg: ""
        }

        try {
            verifyResult = await verify(env.header.authorization);
            params.isAuth = true;
            params.username = verifyResult.username;
            params.headimg = verifyResult.headimg;
        } catch (error) {

        }

        let { id } = env.query;

        let result = await query(`SELECT * FROM img_table WHERE id=${id}`);

        let collecList = [];

        if(verifyResult) collecList = await query(`SELECT * FROM img_user_table WHERE imgid=${id} AND userid=${verifyResult.id}`)

        env.body = {
            code: 200,
            data: {
                ...result[0],
                ...params,
                iscollect: collecList.length === 0 ? 0 : 1
            },
            msg: ''
        };
    }
    async findComment(env) {

        let result = await query(`SELECT * FROM comment_table`);

        env.set("Access-Control-Allow-Origin", "*");

        env.body = {
            code: 200,
            data: result,
            msg: ''
        };

    }

    async addComment(env) {
        let { id } = await verify(env.header.authorization);

        let { commentVal } = env.request.body;

        await query(`INSERT INTO comment_table (content,userid) VALUES ('${commentVal}','${id}')`)

        let result = await query(`SELECT * FROM comment_table`)

        env.set("Access-Control-Allow-Origin", "*");

        env.body = {
            code: 200,
            data: result[result.length - 1],
            msg: ''
        };


    }
}

module.exports = new detail()