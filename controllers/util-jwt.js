const jwt = require('jsonwebtoken');
const { tokenName } = require('../config/index');

module.exports = function (authorization) {
    return new Promise((resolve, reject) => {
        jwt.verify(authorization, tokenName, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }


        });
    })
}


