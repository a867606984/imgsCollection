module.exports = async (env) => {
    let html = `
        <div>holle world</div>
    `;

    await env.render('index', {
        title: '这是登录页'
    })

}