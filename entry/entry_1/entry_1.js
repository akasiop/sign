Page({
  /**
   * 初始化数据
   */
  data: {
    items: [
      { name: 'entry', value: '下次自动登录', checked: 'true' },
    ]
  },


  /**
  * 监听checkbox事件
  */
  listenCheckboxChange: function (e) {
    console.log('当checkbox-group中的checkbox选中或者取消是我被调用');
    //打印对象包含的详细信息
    console.log(e);

  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
