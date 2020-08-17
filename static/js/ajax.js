var _post = function (option) {

    var stringify = function (obj = {}) {
        if (Object.keys(obj).length === 0) return '';

        var result = '';

        for (var i in obj) {
            result += i + '=' + obj[i] + '&';
        }
        return result.slice(0, -1);
    }

    axios({
        method: option.method,
        url: option.url,
        data: option.method === 'POST' || option.method === 'PUT' ? stringify(option.params) : null,
        params: option.method === 'GET' || option.method === 'DELETE' ? option.params : null,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        responseType: 'json',
        baseURL: option.baseURL,
    })
        // axios.post(url,params)
        .then(function (res) {

            if (res.data.code === 200) {
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

    return axios;
}