//时间日期格式化
const initVal = time => {
    if (time < 10 && time > 0) {
        return "0" + time;
    } else if (!time) {
        return "00";
    }
    return time;
}

//初始配置
// const initConfig = {
//     interval: 15,
//     current: 1
// }

const getInNeed = (num, format) => {
    let year = "", month = "", day = "", h = "", m = "", s = "";

    let now = new Date().getTime();
    let current = now + 60 * 60 * 24 * num * 1000;

    let currentTime = new Date(current)
    year = currentTime.getFullYear();
    month = currentTime.getMonth() + 1;
    day = currentTime.getDate();
    h = currentTime.getHours();
    m = currentTime.getMinutes();
    s = currentTime.getSeconds();

    if (format === "YYYY-MM-DD HH:mm:ss") {

        return `${initVal(year)}-${initVal(month)}-${initVal(day)} ${initVal(h)}:${initVal(m)}:${initVal(s)}`

    } else if (format === "YYYY-MM-DD HH:mm") {

        return `${initVal(year)}-${initVal(month)}-${initVal(day)} ${initVal(h)}:${initVal(m)}`

    } else if (format === "YYYY-MM") {

        return `${initVal(year)}-${initVal(month)}`
    }

    return `${initVal(year)}-${initVal(month)}-${initVal(day)}`
}

const container = config => {
    const that = config;

    that.interval = config.interval;
    that.current = config.current;
    that.format = config.format;


    that.getInterval = function () {
        return that.interval;
    }

    that.getCurrent = function () {
        return that.current;
    }

    that.getCurrentDay = function () {
        return getInNeed(that.current || 0, that.format);
    }

    that.getIntervalDay = function () {
        let interval = - that.interval + that.current || 0;
        return getInNeed(interval, that.format)
    }

    that.getFormat = function () {
        return that.format || "YYYY-MM-DD"
    }

    return that;
}

const init = config => {
    let that = {};

    if (config) {
        config.interval = Number(config.interval) || 0;
        config.current = Number(config.current) || 0;
    } else {
        that.interval = 0;
        that.current = 0;
    }

    that = container(config || that);

    that.getDateArr = function () {
        return [this.getIntervalDay(), this.getCurrentDay()];
    }

    return that;
}

const geNowDate = (format) => {
    let year = "", month = "", day = "", h = "", m = "", s = "";

    let currentTime = new Date()
    year = currentTime.getFullYear();
    month = currentTime.getMonth() + 1;
    day = currentTime.getDate();
    h = currentTime.getHours();
    m = currentTime.getMinutes();
    s = currentTime.getSeconds();

    if (format === "YYYY-MM-DD HH:mm:ss") {

        return `${initVal(year)}-${initVal(month)}-${initVal(day)} ${initVal(h)}:${initVal(m)}:${initVal(s)}`

    } else if (format === "YYYY-MM-DD HH:mm") {

        return `${initVal(year)}-${initVal(month)}-${initVal(day)} ${initVal(h)}:${initVal(m)}`

    } else if (format === "YYYY-MM") {

        return `${initVal(year)}-${initVal(month)}`
    }

    return `${initVal(year)}-${initVal(month)}-${initVal(day)}`
}

module.exports = {
    geNowDate
}