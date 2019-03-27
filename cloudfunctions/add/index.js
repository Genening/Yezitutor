// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'yezienv',
  traceUser:true
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
  res = wx.cloud.resquest()
  var db = wx.cloud.database()
  db.collection('student').add({
    data: {
      name: "晓晓",
      position: "韶关",
      phone: "45164885",
      wechat: "5646546",
      introduction: "就读于中山大学",
      subject: "高中数学",
      salary: "80",
      more: "无"
    },
    success: res => {
      console.log(res.data)
    },
    fail: res => {
      console.log(Error)
    }
  })
}