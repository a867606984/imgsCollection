const query = require('./util-db');
const jwt = require('jsonwebtoken');
const verify = require('./util-jwt');

class myImg{
    constructor(){}
    async myCollectImg(env){
        let { id } = await verify(env.header.authorization);

        let result = await query(
            `SELECT * FROM img_user_table a 
            RIGHT JOIN img_table b 
            ON a.imgid=b.id
            WHERE userid=${id}`
            );

        env.body = {
            code: 200,
            data: {
                content:result,
                size:result.length
            },
            msg: ''
        };
    }
}

module.exports = new myImg();

