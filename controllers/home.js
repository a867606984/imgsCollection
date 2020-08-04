module.exports = async (env) =>{
    
    await env.render('index', {
        title: '这是首页'
    })
}