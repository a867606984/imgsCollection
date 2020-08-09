const _post = function (option) {
    axios({
        method: option.method,
        url: option.url,
        data: option.method === 'POST' || option.method === 'PUT' ? option.params : null,
        params: option.method === 'GET' || option.method === 'DELETE' ? option.params : null,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        responseType: 'json',
        baseURL: option.baseURL,
    })
        // axios.post(url,params)
        .then(function (res) {
            console.log(res);
            return
            if (res.data.code === '200') {
                if (option.success) {
                    option.success(res.data)
                }
            } else {
                if (option.failure) {
                    option.failure(res.data)
                } else {
                    console.log('error: ' + url + '--' + JSON.stringify(res.data))
                }
            }
        })
        .catch(function (err) {
            if (err) {
                if (option.failure) {
                    let res = { msg: JSON.stringify(res) };
                    failure(res)
                }

            }
        })
}

_post({
    baseURL: 'http://localhost:3000/',
    url: 'home',
    params: {

    },
    method: 'GET',
    success(res) { },
    failure(err) { }
})