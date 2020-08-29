const query = require('./util-db');
const jwt = require('jsonwebtoken');
const verify = require('./util-jwt');

module.exports = async (env) => {

    await env.render('index', {
        title: '这是我的页'
    })

}


