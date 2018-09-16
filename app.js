//app.js - 小程序构造逻辑
App ({
  onLaunch: function (launchOption) {
    //onLaunch - 监听小程序初始化
    console.log("[info] 小程序初始化...")
  },
  onShow: function (showOption) {
    //onShow - 监听小程序进入前台
    console.log("[info] 小程序进入前台...")
  },
  onHide: function (hideOption) {
    //onHide - 监听小程序进入后台
    console.log("[info] 小程序进入后台...")
  },
  onError: function (errorMsg) {
    //onError - 监听错误产生
    console.log(errorMsg)
  },
  onPageNotFound: function (notFoundMsg) {
    //onPageNotFound - 监听
    console.log(notFoundMsg)
  },
  globalData: {}
})
//App() - 用来注册小程序，接受一个object参数，其指定小程序的生命周期回调
