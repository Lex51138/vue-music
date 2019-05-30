import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const globalState = {
  state:{
    isFetching: true,
    msg: {
        type: 1,//0失败 1成功
        content: ''//弹窗信息
    },
    userInfo: {}
  }
}
const muscilist = {
  state:{
    list:[],//播放歌单
    isPause:true,//暂停的状态的值
    mode:0,//播放模式 0是顺序播放 1是单曲循环 2 是随机播放
    imgSrc:'http://img0.pconline.com.cn/pconline/1608/19/8274060_0_thumb.jpg',//正在播放的歌封面
    Name:'Music',//正在播放歌曲名字
    songer:'Musicsonger'//歌手
  }
}
export default new Vuex.Store({
  modules: {
   globalState,//全局状态
   muscilist//播放器状态
  },

})

