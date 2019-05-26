import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const globalState = {
  isFetching: true,
  msg: {
      type: 1,//0失败 1成功
      content: ''//弹窗信息
  },
  userInfo: {}
}
const muscilist = {
  muscilist:{
    list:[],//当前播放歌单
    isPause:true,//暂停的状态的值
    mode:0,//播放模式 0是顺序播放 1是单曲循环 2 是随机播放
  }
}
export default new Vuex.Store({
  modules: {
    globalState,
    muscilist
  },

})

