var _post = function (option) {

    var stringify = function (obj = {}) {

        const isObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
        const isArray = (obj) => Object.prototype.toString.call(obj) === "[object Array]";

        let newObj = null;
        if (isObject(obj)) newObj = {};
        if (isArray(obj)) newObj = [];

        for (let i in obj) {
            if (isObject(obj[i]) || isArray(obj[i])) newObj[i] = obj[i];
            else if (obj[i] === null) newObj[i] = "";
            else newObj[i] = obj[i];
        }

        return newObj
    }


    axios({
        method: option.method,
        url: option.url,
        data: option.method === 'POST' || option.method === 'PUT' ? option.params : null,
        params: option.method === 'GET' || option.method === 'DELETE' ? option.params : null,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "authorization": localStorage.getItem("token"),
            // "cookies":,
            ...option.headers
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