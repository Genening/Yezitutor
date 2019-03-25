// pages/home/home.js - 主页逻辑
Page({
  data: {
    welcomeMsg: "Welcome"
  },
  onLoad: function (loadOption) {
    //onLoad - 监听页面加载
    //loadOption - (query)打开当前页面路径中的参数
    console.log("[info] 进入主页...")
  },
  current: 'tab1',
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  // onShow: function () {
  //   //onShow - 监听页面显示
  // },
  // onReady: function () {
  //   //onReady - 监听页面首次渲染完成
  // },
  // onHide: function () {
  //   //onHide - 监听页面隐藏
  // },
  // onUnload: function () {
  //   //onUnload - 监听页面卸载
  // },
  // onPullDownRefresh: function () {
  //   //onPullDownRefresh - 监听下拉动作
  // },
  // onReachBottom: function () {
  //   //onReachBottom - 监听上拉触底
  // },
  // onShareAppMessage: function (shareOption) {
  //   //onShareAppMessage - 监听胶囊按钮或自定义转发按钮
  //   return {title: "", path: ""}
  // },
  // onPageScroll: function (scrollTop) {
  //   //onPageScroll - 监听页面滚动
  // },
  // onTabItemTap: function (tabTapOption) {
  //   //onTabItemTap - 监听Tab页面点击
  // }
})
//page() - 注册页面