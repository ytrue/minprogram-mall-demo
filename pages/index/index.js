// 引入 用来发送请求的 方法 一定要把路径补全
import {request} from "../../request/index.js";

Page({
    data: {
        // 轮播图数组
        swiperList: [],
    },

    // 页面开始加载 就会触发
    onLoad: function (options) {
        this.getSwiperList()

    },

    // 获取轮播图数据
    getSwiperList() {
        request({url: "/home/swiperdata"})
            .then(result => {
                this.setData({
                    swiperList: result
                })
            })
    },
})


