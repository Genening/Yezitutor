// pages/notification/my_release/my_release.js
wx.cloud.init({
  env: 'yezienv',
  traceUser: true
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    position: '',
    phone: '',
    wechat: '',
    introduction: '',
    subject: '',
    salary: '',
    more: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  submit: function(e)
  {
    const db = wx.cloud.database({
      env:'yezienv'
    })
    db.collection('test').add({
      data:{
        test:'晓晓'
      },
      success:res=>{
        wx.showToast({
          title: '添加成功',
        })
      }
    })
    // var name = e.detail.value.name
    // var position = e.detail.value.position
    // var phone = e.detail.value.phone
    // var wechat = e.detail.value.wechat
    // var introduction = e.detail.value.introduction
    // var subject = e.detail.value.subject
    // var salary = e.detail.value.salary
    // var more = e.detail.value.more
    // db.collection('student').add({
    //   data: {
    //     name:name,
    //     position:position,
    //     phone:phone,
    //     wechat:wechat,
    //     introduction:introduction,
    //     subject:subject,
    //     salary:salary,
    //     more:more
    //   },
      // success: res => {
      //   console.log(res.data)
      // },
      // fail: res => {
      //   console.log(Error)
      // }
    // })
  }
})