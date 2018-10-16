var constants = require('./constants');
var utils = require('./utils');
var Session = require('./session');
var loginLib = require('./login');
var reqError = require('./reqError.js');

var noop = function noop() {};

function request(options) {
    if (typeof options !== 'object') {
        var message = '请求传参应为 object 类型，但实际传了 ' + (typeof options) + ' 类型';
        throw new reqError(constants.ERR_INVALID_PARAMS, message);
    }
    options = utils.extend({}, callbackDefault,options);

    var defaultOptions = {
      method: 'POST',
      header: null,
      url: options.url,
      data: options.data,
    };

    // 是否已经进行过重试
    var hasRetried = false;

    // 登录后再请求
    function doRequestWithLogin() {
        loginLib.login({ success: doRequest, fail: callFail });
    }

    // 实际进行请求的方法
    function doRequest() {
        wx.request(utils.extend({}, defaultOptions, {
            success: function (response) {
                var data = response.data;
                var error, message;
                if (data && data.code === -1) {
                    Session.clear();
                    // 如果是登录态无效，并且还没重试过，会尝试登录后刷新凭据重新请求
                    if (!hasRetried) {
                        hasRetried = true;
                        doRequestWithLogin();
                        return;
                    }

                    message = '登录态已过期';
                    error = new reqError(data.error, message);

                    options.fail(error);
                    return;
                } else {
                    options.success(null, data.data);
                    options.complete(null, data.data);
                }
            },

            fail: ()=>{
              var error = new reqError(constants.ERR_LOGIN_FAILED, '登录失败，可能是网络错误或者服务器发生异常');
              options.fail(error);
              options.complete(error);
            },
            complete: noop,
        }));
    };

  Session.chack({
    success: (session) => {
      defaultOptions.header = session.skey;
      doRequest();
    },
    fail: () => {
      doRequestWithLogin();
      doRequest();
    }
  });
};

module.exports = {
    request: request,
};