const mysql = require('mysql');

module.exports = async (env) => {
    let html = `
            <div>holle world</div>
        `;

    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'imgsCollection'
    })
    
    pool.getConnection((error, connection) => {
    
        connection.query('SELECT * FROM img_table', (err, res) => {
    
            // 在数据池中进行会话操作
            connection.release();
    
            if (err) throw err;
        })
    
    })

    await env.render('index', {
        title: '这是详情页'
    })

}