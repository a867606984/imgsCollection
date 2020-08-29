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
            let { username, headimg } = await verify(env.header.authorization);
            params.isAuth = true;
            params.username = username;
            params.headimg = headimg;
        } catch (error) {

        }

        let { id } = env.query;

        let result = await query(`SELECT * FROM img_table WHERE id=${id}`);

        env.set("Access-Control-Allow-Origin", "*");

        env.body = {
            code: 200,
            data: {
                ...result[0],
                ...params
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