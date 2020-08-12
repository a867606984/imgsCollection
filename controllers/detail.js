const query = require('./util-db');

class detail {
    constructor() { }
    async findInfoByid(env) {
        let { id } = env.query;

        let result = await query(`SELECT * FROM img_table WHERE id=${id}`);

        env.set("Access-Control-Allow-Origin", "*");

        env.body = {
            code: 200,
            data: { ...result[0], username: "ping", headimg: "https://www.baidu.com/img/flexible/logo/pc/result.png" },
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
        let { commentVal } = env.request.body;

        let userid = 1;

        await query(`INSERT INTO comment_table (content,userid) VALUES ('${commentVal}','${userid}')`)

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