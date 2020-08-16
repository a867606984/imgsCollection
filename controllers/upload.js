
class uploadFn {
    constructor() { }
    async uploadImg(env) {
        console.log('ctx.request.files', env.request.files);
        console.log('ctx.files', env.files);
        console.log('ctx.request.body', env.request.body);


        env.set("Access-Control-Allow-Origin", "*");

        env.body = {
            code: 200,
            data: "",
            msg: ''
        };
    }
}

module.exports = new uploadFn()


