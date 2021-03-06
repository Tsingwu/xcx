// components/navBar/navBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // true 表示显示 title，false 表示不显示 title
    showNavBarTitle: {
      type: Boolean,
      value: true
    },

    // true 表示有后退按钮，false 表示没有后退按钮
    hasGoBack: {
      type: Boolean,
      value: true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  lifetimes: {
    attached: function () {
    },
    detached: function () {
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBackPage(){
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
