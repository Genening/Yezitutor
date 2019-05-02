// pages/about/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  Feedback:function(e){
    var that = this
    var db = wx.cloud.database()
    var feedback = e.detail.value.feedback
    db.collection('feedback').add({
      data:{
        feedback:feedback
      },
      success:res=>{
        this.setData({
          feedback:feedback
        })
        wx.showToast({
          title: '谢谢反馈',
        })
      },
      fail:res=>{
        wx.showToast({
          title: '提交失败',
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

  }
})