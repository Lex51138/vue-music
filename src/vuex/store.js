import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const globalState = {
  state:{
    isFetching: false,
    msg: {
        type: 1,//0失败 1成功
        content: ''//弹窗信息
    },
    userInfo: {},
    isPlayD:false //歌单详情页面是否打开
  },
  mutations:{
    updatePlayD:state => {
      return state.isPlayD=!state.isPlayD;
    }
  }
}
const muscilist = {
  state:{
    list:[],//播放歌单
    isPause:true,//暂停的状态的值
    mode:0,//播放模式 0是顺序播放 1是单曲循环 2 是随机播放
    imgSrc:'http://img0.pconline.com.cn/pconline/1608/19/8274060_0_thumb.jpg',//正在播放的歌封面
    Name:'Music',//正在播放歌曲名字
    musicSrc:'',//音乐播放地址
    songer:'Musicsonger',//歌手
    rankList:[],//排行榜歌单
    hotlist:[]//热门歌单
  },
  mutations:{
    updatePause:state=>{
      return state.isPause=!state.isPause;
    },
    updateRank:(state,data)=>{
      return state.rankList = data;
    },
    updateHot:(state,data)=>{x
      return state.hotlist =data;
    },
    updateMuisc:(state,data)=>{
          state.imgSrc = data.imgSrc;
          state.musicSrc = data.musicSrc;
          state.Name=data.Name;
          state.songer=data.songer;
          state.isPause=data.isPause;
    }
  }
}
export default new Vuex.Store({
  modules: {
   globalState,//全局状态
   muscilist//播放器状态
  },
})

