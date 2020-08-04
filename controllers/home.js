const query = require('./util-db');

module.exports = async (env) => {

    let res = await query('SELECT * FROM img_table');

    await env.render('index', {
        title: '这是首页',
        imgList: res
    })

}