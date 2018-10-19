# djlee的sdk 修改自wafer2

```page以及其他地方的使用方法
var req = require('./cloud/index.js');
var req = require('../../cloud/index.js');
.
.
.

```req.login(options)

登陆并返回用户的详细信息

req.login({
    success: function (userInfo) {
        //dosth;
    },
    fail: function (err) {
        //dosth;
    }
});

#### 参数
|参数         |类型           |说明
|-------------|---------------|--------------
|options      |object         |success(userInfo)
|                             |//userInfo包括了头像昵称和云服务器返回的其他用户信息
|                             |fail(error)
|                             |//失败回调
|                             |//注意login没有complect回调

#### userInfo 的详细信息
以后确定了再补充

```req.getUserInfo(options)

获取自己详细信息或者他人的基本信息

req.getUserInfo({
  isUpgrade:true,
  data:{id:56},
  success: function (userInfo) {
        //dosth;
    },
    fail: function (err) {
        //dosth;
    },
    complect: funciton(error,param){
        //dosth;
    }
});

#### 参数
|参数         |类型           |说明
|-------------|---------------|--------------
|options      |object         |isUpgrade:false
|                             |//是否要更新的信息，默认为false
|                             |data:{id:56}
|                             |//data中只有一个id，默认不填则是查询自己的信息，如果不空为查询id的基本信息
|                             |success(userInfo)
|                             |//userInfo包括了头像昵称和云服务器返回的其他用户信息
|                             |fail(error)
|                             |//失败回调
|                             |complect(error,param)
|                             |//完成回调，无论成功失败都回调，其中error是失败时的error，param是成功时的参数

```req.putUserInfo(options)

更新且只能自己的UserInfo

req.getUserInfo({
  data:data,
  success: function (userInfo) {
        //dosth;
    },
    fail: function (err) {
        //dosth;
    },
    complect: funciton(error,param){
        //dosth;
    }
});

#### 参数
|参数         |类型           |说明
|-------------|---------------|--------------
|options      |object         |data:{nickname:null}
|                             |//data是obj类型，必须是userInfo中的键，值为null即可
|                             |success(userInfo)
|                             |//新的userInfo
|                             |fail(error)
|                             |//失败回调
|                             |complect(error,param)
|                             |//完成回调，无论成功失败都回调，其中error是失败时的error，param是成功时的参数

```req.getItemDetail(options)

获得某个家教信息的详细信息

req.getItemDetail({
  data:{},
  success: function (Item) {
        //dosth;
    },
    fail: function (err) {
        //dosth;
    },
    complect: funciton(error,param){
        //dosth;
    }
});

#### 参数
|参数         |类型           |说明
|-------------|---------------|--------------
|options      |object         |data:{address:null}
|                             |//data是obj类型，必须是Item中的键，值为null即可()，注：address为家教地点
|                             |success(Item)
|                             |//Item为某一个家教项目的具体信息
|                             |fail(error)
|                             |//失败回调
|                             |complect(error,param)
|                             |//完成回调，无论成功失败都回调，其中error是失败时的error，param是成功时的参数

#### Item 以后继续再补充

|成员         |类型           |说明
|-------------|---------------|--------------
|stuType      |int            |用三位二进制表示：111，左到右三位分别表示小学，中学，大学
|stuGrade     |int            |用六位二进制表示：111111，左到右六位分别表示一至六年级
|address      |String         |家教有关位置
|avaiTime     |String         |家教的时间
|pubTime      |String         |发布该家教的时间

二进制代表多个选项的写方法
var stuType = 0;
stuType |= 1;//代表包括大学
stuType>>1; //右移一位
stuType |= 0;//代表不包括中学
stuType>>1;
stuType |= 1;//代表包括小学
//stuType代表该家教信息的服务对象为小学和大学
读的方法
res = stuType & 1; //res = 1代表包含大学，以下同理
stuType<<1
res =stuType & 1;
.
.
.

```req.putItemDetail(options)

修改或者发布家教信息
//如果是发布信息的时候注意提交Item中的必选参数

req.getItemDetail({
  data:data,
  success: function (Item) {
        //dosth;
    },
    fail: function (err) {
        //dosth;
    },
    complect: funciton(error,param){
        //dosth;
    }
});

#### 参数
|参数         |类型           |说明
|-------------|---------------|--------------
|options      |object         |data:{address:"韶关市北江中学对面煤渣操场"}
|                             |//data是obj类型，必须是Item中的键值对
|                             |success(Item)
|                             |//Item为某一个家教项目的具体信息
|                             |fail(error)
|                             |//失败回调
|                             |complect(error,param)
|                             |//完成回调，无论成功失败都回调，其中error是失败时的error，param是成功时的参数

```req.getItemList(options)

获取搜索家教信息的结果列表

req.getItemList({
  data:data,
  success: function (itemList) {
        //dosth;
    },
    fail: function (err) {
        //dosth;
    },
    complect: funciton(error,param){
        //dosth;
    }
});

#### 参数
|参数         |类型           |说明
|-------------|---------------|--------------
|options      |object         |data:{}
|                             |//data的信息在下面
|                             |success(itemList)
|                             |//itemList是Item的列表
|                             |fail(error)
|                             |//失败回调
|                             |complect(error,param)
|                             |//完成回调，无论成功失败都回调，其中error是失败时的error，param是成功时的参数

#### data中的参数 ```以后继续再补充
|成员         |类型           |说明
|-------------|---------------|--------------
|stuType      |int            |详看Item
|stuGrade     |int            |详看Item
|address      |String         |详看Item
|avaiTime     |String         |详看Item
|page         |int            |表示要获取第几页的数据
|sizePerPage  |int            |默认为：还没确定
