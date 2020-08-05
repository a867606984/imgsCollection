const query = require('./util-db');

module.exports = async (env) => {

    let res = await query('SELECT * FROM img_table LIMIT 1,10');

    await env.render('index', {
        imgList: res
    })

}