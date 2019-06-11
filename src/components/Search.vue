<template>
<div>
  <!-- 搜索框 -->
  <div class="search">
      <div class="search-box">
        <img src="../assets/se.jpg" alt="" @click="inputOnclick">
        <input class="search-input" 
        @focus="$emit('onFocus')" 
        type="text" 
        ref="searchInput"
        placeholder="搜索 歌曲名称/专辑/歌手">
      </div>
    <transition name="fade">
      <div class="cancel"
      v-if="inputState"
      @click="$emit('onCancel')"
      >取消</div>
    </transition>
  </div>
  <!-- 下拉条 -->
  <div v-if="inputState" class="down-box">
    <div class="history-box">
        <mu-chip class="demo-chip" v-for="(item,index) in historyArr" :key="index" @click="historyClick">
          {{item}}
        </mu-chip>
    </div>
  </div>
  <!-- 搜索结果 -->
  <div class="result-box" v-if="inputState">
    <div class="result-dq">
        <p class="dq-title"><img src="../assets/dq.png" alt="">单曲</p>
        <div v-for="(item,key) in seList" :key="key">
          <item v-bind:data="item" v-on:onDown="downOnclick(item)"/>    
        </div>
    </div>
  </div>
  <!-- 底部菜单-->
    <transition name='downMenu'>
      <DownMenu 
      v-show="isDown" 
      v-bind:isDown="isDown" 
      v-on:onDown="()=>{isDown=false}"
      v-bind:nowItem="nowItem"
      v-bind:itemArr="{name:'添加至播放列表',click:()=>{}}"
      />
    </transition>
  </div>
</template>
<script>
import api from '../components/api/api'
import item from '../components/multi/item'
import DownMenu from '../components/multi/DownMenu'
export default {
  name: 'Search',
  props:['inputState'],
  components:{
    item,//item组件
    DownMenu//下拉弹窗组件
  },
  data(){
    return{
      seList:[],
      isResult:false,
      isDown:false,
      nowItem:[],
    }
  },
  methods:{
    downOnclick:function(item){
        this.nowItem=item;
        this.isDown=true;
    },
    inputOnclick : function(){
        let that = this;
        const inputVal=this.$refs.searchInput.value;
        let data = {
          keyword:inputVal,
          type:'song'
        }
        api.search(data).then(result=>{
          that.seList=result.data.data.list;
        })
        //做了个null判断
        let result = localStorage.getItem('history')===null?inputVal:localStorage.getItem('history')+','+inputVal;
        if(localStorage.getItem('history')===null){
            localStorage.setItem('history',result);
        }
        else{
            //重复搜索不添加至缓存
            localStorage.getItem('history').split(',').indexOf(inputVal)==-1?localStorage.setItem('history',result):"";
        }
        this.isResult=true;
    },
    historyClick: function(e){
        this.$refs.searchInput.value=e.target.innerText;
        this.inputOnclick();
    }
  },
  computed:{
    historyArr:function (){
       if(localStorage.getItem('history')!=null){
         return localStorage.getItem('history').split(',');
       }
    }
  }
}
</script> 
<style lang="scss" scoped>
.search{
    display: flex;
    background: #fafafa;
    transition:all .4s;
    img{
        display: inline-block;
        margin: 7px 5px;
    }
    .search-box{
        width: 100%;
        background: #eee;
        border-radius: 5px;
        margin: 10px;
        -ms-flex-align: center;
        -webkit-box-align: center;
        align-items: center;
        height: 44px;
    }
    .search-input{
        border: none;
        width: 81%;
        background: #eee;
        font-size: medium;
        height: 36px;
        position: relative;
        top: -19px;
    }
    .cancel{
        height: 40px;
        width: 15%;
        margin: 10px auto;
        line-height: 42px;
        overflow: hidden;
        font-size: medium;
    }
    //移入移出动画
    .fade-enter-active, .fade-leave-active {
        transition:  .4s;
    }
    .fade-enter,.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        width: 0;
        opacity: 0
    }
}
   .down-box{
      background-color: #fafafa;
      .history-box{
        .mu-chip{
          margin-left: 10px;
          margin-top: -1px;
          margin-bottom: 13px;
          position: relative;
          top: 6px;
        }
      }
    }
    .result-box{
      .result-dq{
        margin-top: -8px;
        .dq-title{
          font-size:16px;
          img{
            margin-right: 15px;
            margin-left:10px;
            width:23px;
            position: relative;
            top:6px;
          }
        }
      }
    }
   //移入移出动画
    .downMenu-enter-active, .downMenu-leave-active {
        transition:  .3s;
    }
    .downMenu-enter,.downMenu-leave-to /* .fade-leave-active below version 2.1.8 */ {
          opacity: 0
    }
</style>