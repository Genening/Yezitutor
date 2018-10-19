var constants = require('./constants');
var request = require('./request.js');
var utils = require('./utils.js');
var Session = require('./session.js');
var reqError = require('./reqError.js');
var config = require('../config.js');


var noop = function noop() { };
var callbackDefault = {
  success: noop,
  fail: noop,
  complete: noop,
};


var getUserInfo = (options) =>{
  if (!options) {
    error = new reqError(constants.ERR_INVALID_PARAMS, "参数错误，请检查");
    return;
  }
  options = utils.extend({}, callbackDefault, options);
  request({
    url: config.getUserInfo,
    success: options.success,
    fail: options.fail
  });
}
var putUserInfo = (options) => {
  if(!options || !options.data)
  {
    error = new reqError(constants.ERR_INVALID_PARAMS,"参数错误，请检查");
    return;
  }
  options = utils.extend({}, callbackDefault,options);
  request({
    url: config.putUserInfo,
    success: options.success,
    fail: options.fail
  });
}
var getItemDetail = (options) => {
  if (!options) {
    error = new reqError(constants.ERR_INVALID_PARAMS, "参数错误，请检查");
    return;
  }
  options = utils.extend({}, callbackDefault, options);
  request({
    url: config.getItemDetail,
    success: options.success,
    fail: options.fail
  });
}
var putItemDetail = (options) => {
  if (!options || !options.data) {
    error = new reqError(constants.ERR_INVALID_PARAMS, "参数错误，请检查");
    return;
  }
  options = utils.extend({}, callbackDefault, options);
  request({
    url: config.getItemDetail,
    success: options.success,
    fail: options.fail
  });
}


module.export = {
  getUserInfo: getUserInfo,
  putUserInfo: putUserInfo,
  getItemDetail: getItemDetail,
  putItemDetail: putItemDetail,
}