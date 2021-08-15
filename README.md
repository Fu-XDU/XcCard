# [仿]通信行程卡

+ 一共三个页面，分别是绿码、黄码和红码。

+ 主页是绿码。

+ 黄码和红码不可由用户点击进入，可以在控制台执行指令进入

  + 进入黄码页面

    ```js
    wx.navigateTo({
      url: '../yellowCard/yellowCard',
    })
    ```

  + 进入红码页面

    ```js
    wx.navigateTo({
      url: '../redCard/redCard',
    })
    ```

+ 时间为本地时间，手机号码随机生成。生成的逻辑代码在`miniprogram/utils/util.js`。

  
