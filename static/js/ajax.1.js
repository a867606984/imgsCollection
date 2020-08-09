function ajax(option) {
    var xhr = new XMLHttpRequest();

    var url = option.url;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status < 200 || xhr.status > 300) {
                return option.fail(getError(url, option, xhr))
            }
            option.success(getBody(xhr));
        }
    }

    xhr.open(option.method, url, true);

    var data = null;
    if (option.data && url === "post") {
        data = {};
        for (var i in option.data) {
            if (option.data[i] !== null) {
                data[i] = option.data[i];
            }
        }
    }

    if (option.withCredentials && "withCredentials" in xhr) {
        xhr.withCredentials = true;
    }

    var headers = option.headers || {};

    for (var i in headers) {
        if (headers.hasOwnProperty(i) && headers[i] !== null) {
            xhr.setRequestHeader(i);
        }
    }

    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")

    xhr.send(data);

    return xhr;
}

function getError(url, option, xhr) {
    var msg;
    if (xhr.response) {
        msg = xhr.response.error ? "" + xhr.response.error : xhr.response + "";
    } else if (xhr.responseText) {
        msg = xhr.responseText + "";
    } else {
        msg = "fail to post " + url + " " + xhr.status;
    }

    var err = new Error(msg);
    err.status = xhr.status;
    err.method = option.method;
    err.url = url;
    return err;
}

function getBody(xhr) {
    var text = xhr.responseText || xhr.response;
    if (!text) {
        return text;
    }

    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}
