const query = require('./util-db');
const jwt = require('jsonwebtoken');

class home {
    constructor() { }
    async findList(env) {

        var decoded = jwt.verify(env.header.cookies, 'my_token');
    console.log(decoded) // bar

        let { pageSize, pageNum, searchVal } = env.query;

        let result = "";
        let totalSize = 0;

        //查询字符串为空
        let reqQueryNull = `SELECT * FROM img_table LIMIT ${(pageNum - 1) * 10},${pageNum * 10}`;

        //查询字符串有值
        let queryStr = '';
        for (let i = 0; i < searchVal.length; i++) {
            if (i === searchVal.length - 1) queryStr += `'%${searchVal[i]}%'`;
            else queryStr += `'%${searchVal[i]}%' OR`;
        }
        let reqQuery = `SELECT * FROM img_table WHERE detail like ${queryStr} LIMIT ${(pageNum - 1) * 10},${pageNum * 10} `;

        if (!searchVal) {
            result = await query(reqQueryNull);
            totalSize = await query(`SELECT COUNT(*) FROM img_table`);
        }
        else {
            result = await query(reqQuery);
            totalSize = await query(`SELECT COUNT(*) FROM img_table WHERE detail like ${queryStr}`);
        }



        // await env.render('index', {
        //     imgList: res
        // })

        env.set("Access-Control-Allow-Origin", "*");

        env.body = {
            code: 200,
            data: {
                pageSize,
                pageNum,
                totalSize: totalSize[0]['COUNT(*)'],
                data: result
            },
            msg: ''
        };
    }

    async updateCollection(env) {

        let { id } = env.request.body;

        let iscollectList = await query(`SELECT iscollect FROM img_table WHERE id=${id}`);
        let iscollect = iscollectList[0].iscollect == 0 ? 1 : 0;


        await query(`UPDATE img_table SET iscollect=${iscollect} WHERE id=${id}`)

        env.set("Access-Control-Allow-Origin", "*");

        env.body = {
            code: 200,
            data: "",
            msg: ''
        };


    }

}

module.exports = new home();