const query = require('./util-db');

module.exports = async (env) => {

    let res = await query('SELECT * FROM img_table LIMIT 1,10');

    // await env.render('index', {
    //     imgList: res
    // })

    env.set("Access-Control-Allow-Origin", "*");

    env.body = {
        code: 200,
        data: res,
        msg: ''
    };

}