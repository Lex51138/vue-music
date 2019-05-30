<template>
  <div id="app">
    <!-- 顶部搜索框 -->
    <Search  
       v-bind:inputState="inputstate"
       v-on:onFocus="onFocus()"
       v-on:onCancel="onCancel()"
    />
  <!-- content -->
  <div class="app-body" v-show="!inputstate">
    <mu-tabs :value="active" @change="onChange" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center full-width>
      <mu-tab value="0">排行榜</mu-tab>
      <mu-tab value="1">推荐</mu-tab>
      <mu-tab value="2">我的</mu-tab>
    </mu-tabs>
    <div class="body-bar">
       <!-- swiper -->
      <swiper :options="swiperOption" ref="mySwiper"> 
        <swiper-slide>
          <Leaderboard />
        </swiper-slide>
        <swiper-slide>
          <Recommend />
        </swiper-slide>
        <swiper-slide>
          <My />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- 播放器 -->
    <div class="app-play">
      <Play 
        v-on:onPlay="onPlay"
        v-on:onisPlay="onisPlay"
        v-bind:isPlay="isPlay"
      />
    </div>
  <!-- 播放音乐详情 -->
    <transition name="playDe">
        <playDetails 
        v-on:onPlay="onPlay"
        v-bind:isPlay="isPlay"
        v-on:onisPlay="onisPlay"
        v-if="playD"
        />
    </transition>
  </div>

</template>

<script>
import Search from "./components/Search"
import Leaderboard from "./components/page/Index/Leaderboard"
import Recommend from "./components/page/Index/Recommend"
import Play from "./components/Play"
import My from "./components/page/Index/My"
import playDetails from './components/playDetails'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'app',
  components: {
    Search,//搜索组件
    Leaderboard,//排行榜组件
    Recommend,//推荐组件
    My,//我的 组件
    swiper,//轮播组件
    swiperSlide,//轮播组件
    Play,//底部播放组件
    playDetails,//播放详情组件
  },
  data () {
    return {
      active: "0",//板块切换状态
      value1:"",//input value
      inputstate:false,//input失去焦点 和有焦点判断是否要搜索
      swiperOption:{
        initialSlide:0,
        spaceBetween: 40,
      },
      playD:false,
      isPlay:false
    };
  },
  methods:{
    onFocus:function (){//更改搜索框状态
        this.inputstate=true;
      },
    onCancel:function(){//更改搜索框状态
        this.inputstate=false;
      },
    onChange:function(val){//滑动轮播更改mu导航的标签
        this.active=val;
        this.swiper.slideTo(val);
    },
    onPlay:function(){
        this.playD=!this.playD;
    },
    onisPlay:function(){
        this.isPlay=!this.isPlay;
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
  },
  mounted(){
    const that = this;
    this.swiper.on("slideChange",function(){
        that.onChange(this.activeIndex.toString())
    })
  }
}

</script>
<style lang="scss">
ul li{
  list-style: none;
}
body{
  background-color:#EDEDED!important;
}
.playDe-enter-active {
  transition: all 0.3s ease;
}

.playDe-leave-active {
  transition: all 0.3s ease-out;
}
.playDe-enter, .playDe-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(150px);
  opacity: 0;
}
</style>