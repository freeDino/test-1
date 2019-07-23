//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      './image/1.jpg',
      './image/2.jpg',
      './image/3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    viewDatas: [{
      title: "使用AngularJS开发下一代Web应用",
      price: "299.00",
      imgUrl: "./image/1.jpg"
    }, {
      title: "Vue+Webpack打造web应用",
      price: "229.00",
        imgUrl: "./image/2.jpg"
    }, {
      title: "React知识点综合运用实例",
      price: "329.00",
        imgUrl: "./image/3.jpg"
    }, {
      title: "微信小程序入门",
      price: "99.00",
        imgUrl: "./image/4.jpg"
    }],

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    time: (new Date()).toString(),
    msg: '???',
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4]
  },

  buyit(event) {
    console.log(event)
    var id = event.currentTarget.dataset.id;
    // debugger
    wx.navigateTo({
      url: "../buy/buy?id=" + id
    })
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickMe: function() {
    var multiplyBy2 = require('./modules/moduleA')
    var result = multiplyBy2(4) 
    this.setData({ msg: result })
  },
  markertap: function(){
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat   (this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  //生命周期函数--监听页面加载，触发时机早于onShow和onReady
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  //生命周期函数--监听页面显示，触发事件早于onReady
  onShow: function () {
    console.log("indexOnShow")
   },
  //生命周期函数--监听页面初次渲染完成
  onReady: function () { },
  //生命周期函数--监听页面隐藏
  //这种情况会在使用wx.navigateTo切换到其他页面、底部tab切换时触发。
  onHide: function () { },
  //生命周期函数--监听页面卸载
  //当前页面使用wx.redirectTo或wx.navigateBack返回到其他页时，当前页面会被微信客户端销毁回收
  onUnload: function () { },
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () { },
  //页面上拉触底事件的处理函数
  onReachBottom: function () { },
  //用户点击右上角转发
  onShareAppMessage: function () { },
  //页面滚动触发事件的处理函数
  onPageScroll: function () { },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})
