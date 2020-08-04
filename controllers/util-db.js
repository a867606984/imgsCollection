
const mysql = require('mysql');
const config = require('../config/index').database;
const pool = mysql.createPool({
    host: config.host,
    user: config.user,    // 数据库用户
    password: config.password,  // 数据库密码
    database: config.database  // 选中数据库
})

module.exports = function (sql) {
    return new Promise((resolve, reject) => {

        pool.getConnection(function (err, connection) {

            if (err) reject(err);

            connection.query(sql, (error, res, fields) => {

                if (!error) {
                    resolve(res);
                } else {
                    reject(error);
                }
                // 结束会话
                connection.release();
                // 如果有错误就抛出
                if (error) throw error;
            })
        })
    })
}