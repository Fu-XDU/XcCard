// miniprogram/pages/yellowCard/yellowCard.js
var util = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime: '1970.01.01 00:00:00',
    phoneNumber: '188****8888',
    location: '陕西省西安市'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var _this = this
    this.setData({
      phoneNumber: util.randomPhoneNumber(),
      nowTime: util.formatTime(new Date())
    })
    wx.getStorage({
      key: 'location',
      success(res) {
        _this.setData({
          location: res.data
        })
      }
    })
    //this.autoRefreshTime()
  },

  autoRefreshTime() {
    var _this = this
    setInterval(function () {
      _this.setData({
        nowTime: util.formatTime(new Date())
      })
    }, 500);
  },
  changePlace() {
    var _this = this
    wx.showModal({
      title: '修改地点',
      editable: true,
      //content: '这是一个模态弹窗',
      placeholderText: '请输入地点',
      success(res) {
        if (res.confirm) {
          console.log(res)
          _this.setData({
            location: res.content
          })
          wx.setStorage({
            key: "location",
            data: res.content
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})