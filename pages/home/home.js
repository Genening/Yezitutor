const db = wx.cloud.database()
const book = db.collection('student')
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {
    student_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;

    db.collection('student').get({
      success: res => {
        this.setData({
          student_list: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  viewItem: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../home/messeage_card/messeage_card?id=' + id
    });
  }
})
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
//page() - 注册页面