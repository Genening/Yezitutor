var constants = require('./lib/constants');
var login = require('./lib/login');
var requests = require('./lib/requests');
var reqError = require('./lib/reqError.js');

var exports = module.exports = {
    login: login.login,
    getUserInfo: requests.getUserInfo,
    putUserInfo: requsets.putUserInfo,
    getItemDetail: requsets.getItemDetail,
    putItemDetail: requsets.putItemDetail,
    
    reqError: reqError,
};

// 导出错误类型码
Object.keys(constants).forEach(function (key) {
    if (key.indexOf('ERR_') === 0) {
        exports[key] = constants[key];
    }
});