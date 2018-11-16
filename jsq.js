// pages/jsq/jsq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     /**
   * 为每个按钮绑定一个专属ID，定义完成后到wxml给每个按钮进行绑定
   */
    id1:"clean",
    id2:"back",
    id3:"Percent",
    id4:"Divide",
    id5:"num-7",
    id6:"num-8",
    id7:"num-9",
    id8:"Multiply",
    id9:"num-4",
    id10:"num-5",
    id11:"num-6",
    id12:"Multiply",
    id13:"num-1",
    id14:"num-2",
    id15:"num-3",
    id16:"add",
    id17:"Tab",
    id18:"0",
    id19:"point",
    id20:"equal",

    Result:"0",
    pointSign:false,

  },
  /**
   * 调用日志，查看点击的id，将点击的id分离出有用数字，等于数字。
   */
  clickButton:function(e) {
    console.log(e);
    var btnValue = e.target.id;
    var res = this.data.Result;
    var newpointSgin = this.data.pointSign;
    if(btnValue>"=num-0" && btnValue<="num-9") {
      var num = btnValue.split('-')[1];
      if(res == "0") {
        res = num;
      }else {
        res = res+num;
      }
    } else{
      if (btnValue == "point"){
        if (!newpointSgin) {
          res = res+'.';
          newpointSgin = true;
        }
        }else if (btnValue == "clean") {
          res="0";
          newpointSgin = false;
        }else if(btnValue == "back") {
          var length = res.length;
          if(length>1) {
            res = res.substr(0,length-1);
          }else {
            res = "0";
          }
        }
      
    }
      
   /**
     * 下面是数据回传,Result是数字回传。pointSgin是小数点回传；
    */
    this.setData({
      Result:res,
      pointSgin: newpointSgin,
    });



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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