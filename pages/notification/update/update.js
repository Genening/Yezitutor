const db = wx.cloud.database()
const book = db.collection('student')
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  onReset: function (e) {
    var dname = this.data.name
    var dposition = this.data.position
    var dphone = this.data.phone
    var dwechat = this.data.wechat
    var dintroduction = this.data.introduction
    var dsubject = this.data.subject
    var dsalary = this.data.salary
    var dmore = this.data.more
    this.setData({
      name: dname,
      position: dposition,
      phone: dphone,
      wechat: dwechat,
      introduction: dintroduction,
      subject: dsubject,
      salary: dsalary,
      more: dmore
    })
  },
  onUpdate: function (e) {
    var name = e.detail.value.name
    var position = e.detail.value.position
    var phone = e.detail.value.phone
    var wechat = e.detail.value.wechat
    var introduction = e.detail.value.introduction
    var subject = e.detail.value.subject
    var salary = e.detail.value.salary
    var more = e.detail.value.more
    const db = wx.cloud.database()
    db.collection('student').doc(this.data.id).update({
      data: {
        name: name,
        position: position,
        phone: phone,
        wechat: wechat,
        introduction: introduction,
        subject: subject,
        salary: salary,
        more: more
      },
      success: res => {
        this.setData({
          studentid: res._id,
          name: name,
          position: position,
          phone: phone,
          wechat: wechat,
          introduction: introduction,
          subject: subject,
          salary: salary,
          more: more
        })
        wx.showToast({
          title: '更新成功',
        })
        console.log('[student][新数据数录] 成功, 学生_id', res._id)
      },
      fail: res => {
        wx.showToast({
          title: '更新失败',
        })
        console.error('[student] [新数据记录] 失败: ', err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('student').doc(options.id).get({
      success: res => {
        console.log(res.data);
        this.setData({
          student: res.data,
          id: options.id
        });
      },
      fail: err => {
        console.error(err);
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
)