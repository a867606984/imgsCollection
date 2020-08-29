const query = require('./util-db');
const jwt = require('jsonwebtoken');
const verify = require('./util-jwt');

class home {
    constructor() { }
    async findList(env) {
        let verifyResult = null;
        let isAuth = false;
        try {
            let verifyResult = await verify(env.header.authorization);
            console.log(verifyResult);
            isAuth = true;
        } catch (error) {

        }

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
                data: result,
                isAuth
            },
            msg: ''
        };
    }

    async updateCollection(env) {
        let verifyResult = await verify(env.header.authorization);
        let uesrid = verifyResult.id;


        let imgid = env.request.body.id;

        let iscollectList = await query(`SELECT iscollect FROM img_table WHERE id=${imgid}`);
        let iscollect = iscollectList[0].iscollect == 0 ? 1 : 0;

        await query(`UPDATE img_table SET iscollect=${iscollect} WHERE id=${imgid}`)


        let img_user_result = await query(`SELECT * FROM img_user_table WHERE imgid=${imgid} AND userid=${uesrid}`);

        if (img_user_result[0]) {
            if (iscollect == 0) {
                await query(`DELETE FROM img_user_table WHERE imgid=${imgid} AND userid=${uesrid}`);
            } else {
                await query(`UPDATE img_user_table SET imgid=${imgid} WHERE imgid=${imgid} AND userid=${uesrid}`)
                await query(`UPDATE img_user_table SET userid=${userid} WHERE imgid=${imgid} AND userid=${uesrid}`)
            }
        } else {
            if (iscollect == 1) {
                let img_user_list = await query(`SELECT * FROM img_user_table`);

                if (img_user_list.length === 0) {
                    await query(`TRUNCATE TABLE img_user_table`);
                }

                await query(`INSERT INTO img_user_table(imgid,userid) VALUES(${imgid},${uesrid})`);
            }
        }

        env.set("Access-Control-Allow-Origin", "*");

        env.body = {
            code: 200,
            data: "",
            msg: ''
        };


    }

}

module.exports = new home();