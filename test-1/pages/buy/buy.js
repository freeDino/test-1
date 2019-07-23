Page({
  data: {
    buylist: []
  },
  onLoad(option) {
    console.log(option)
    var that = this;
    wx.request({
      url: "http://localhost:8888/test.json",
      data: {
        id: option.id
      },
      success(res) {
        that.setData({
          buylist: res.data.buylist
        })
      }
    })
  }
})