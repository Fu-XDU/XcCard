// pages/xianCode/xianCode.js
var util = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    places: ['新增'],
    showPlaceIndex: 1,
    datetime: '1970-01-01 08:00:00',
    samplingTime: '01/01 08:00:00',
    idNumber: [1, 28],
    positive: false,
    person_name: '*辰',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var _this = this
    this.setData({
      datetime: util.formatTime(new Date()).replaceAll('.', '-'),
      samplingTime: _this.genSamplingTime(),
      idNumber: [Math.floor(Math.random() * 8) + 1, util.formatNumber(Math.floor(Math.random() * 99))]
    })
    wx.getStorage({
      key: 'card_locations',
      success(res) {
        _this.setData({
          places: res.data
        })
      }
    })
    wx.getStorage({
      key: 'person_name',
      success(res) {
        _this.setData({
          person_name: res.data
        })
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

  },

  genSamplingTime() {
    let now = new Date()
    let h = now.getHours()
    let c = h < 10 ? 1 : 0
    now.setDate(now.getDate() - c)
    const res = now.getMonth() + 1 + '/' + now.getDate() + '/' + '0' + (8 + c) + ':' + util.formatNumber(Math.floor(Math.random() * 59)) + ':' + util.formatNumber(Math.floor(Math.random() * 59))
    return res
  },

  pickerPlace(e) {
    const pickIndex = parseInt(e.detail.value)
    if (pickIndex == 0) {
      this.changePlace()
    } else {
      const pickedData = this.data.places[pickIndex]
      this.data.places.splice(pickIndex, 1)
      this.data.places.splice(1, 0, pickedData)
      this.setData({
        places: this.data.places,
        showPlaceIndex: 1
      })
    }
  },

  changePlace() {
    var _this = this
    wx.showModal({
      title: '新增地点',
      editable: true,
      placeholderText: '请输入地点',
      success(res) {
        if (res.confirm) {
          if (res.content.split(' ').join('').length == 0) {
            return
          }
          const dataIndex = _this.data.places.indexOf(res.content)
          if (dataIndex !== -1) {
            _this.data.places.splice(dataIndex, 1)
          }
          _this.data.places.splice(1, 0, res.content)
          _this.setData({
            places: _this.data.places,
            showPlaceIndex: 1
          })
          wx.setStorage({
            key: "card_locations",
            data: _this.data.places
          })
        }
      }
    })
  },

  changePersonName() {
    var _this = this
    wx.showModal({
      title: '修改姓名',
      editable: true,
      placeholderText: '请输入姓名',
      success(res) {
        if (res.confirm) {
          const content = res.content.split(' ').join('');
          const len = content.length
          if (len == 0) {
            return
          }
          _this.setData({
            person_name: '*'.repeat(len - 1) + content.charAt(len - 1)
          })
          wx.setStorage({
            key: "person_name",
            data: _this.data.person_name
          })
        }
      }
    })
  },

  changePositive() {
    this.setData({
      positive: !this.data.positive
    })
  },

  toCovidTestResult() {
    wx.navigateTo({
      url: '../covidTestResult/covidTestResult',
    })
  },

  toXcCard() {
    
    wx.navigateTo({
      url: '../index/index',
    })
  }
})