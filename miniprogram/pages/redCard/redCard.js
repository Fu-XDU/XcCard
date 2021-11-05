// miniprogram/pages/redCard/redCard.js
var util = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime: '1970.01.01 00:00:00',
    phoneNumber: '188****8888',
    location: '河南省新乡市'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    this.setData({
      phoneNumber: util.randomPhoneNumber()
    })
    setInterval(function () {
      _this.setData({
        nowTime: util.formatTime(new Date())
      })
    }, 500);
    wx.getStorage({
      key: 'location',
      success(res) {
        _this.setData({
          location: res.data
        })
      }
    })
  },
  changePlace: function () {
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