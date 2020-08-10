const query = require('./util-db');

class detail {
    constructor() { }
    async findInfoByid(env) {
        let { id } = env.query;

        let result = await query(`SELECT * FROM img_table WHERE id=${id}`);

        env.body = {
            code: 200,
            data: { ...result[0], username: "ping", headimg: "https://www.baidu.com/img/flexible/logo/pc/result.png" },
            msg: ''
        };
    }
    async addComment(env) {



    }
}

module.exports = new detail()