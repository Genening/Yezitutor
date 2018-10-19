/***
 * @class
 * 表示请求和登陆过程中发生的异常
 */
module.export = (function () {
  function reqError(type, message) {
    Error.call(this, message);
    this.type = type;
    this.message = message;
  }

  reqError.prototype = new Error();
  reqError.prototype.constructor = reqError;

  return reqError;
})();