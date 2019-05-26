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
      <div></div>
    </div>
    <ul>
      <li></li>
    </ul>
  </div>
</div>
</template>
<script>

export default {
  name: 'Search',
  props:['inputState'],
  methods:{
    inputOnclick : function(){
        const inputVal=this.$refs.searchInput.value;
        //做了个null判断
        let result = localStorage.getItem('history')===null?inputVal:localStorage.getItem('history')+','+inputVal;
        
        if(localStorage.getItem('history')===null){
            localStorage.setItem('history',result);
        }
        else{
            //重复搜索不添加至缓存
            localStorage.getItem('history').split(',').indexOf(inputVal)==-1?localStorage.setItem('history',result):"";
        }

    }
  },
  computed:{
    historyArr:function (){
      return  localStorage.getItem('history').split(',');
    }
  }
}
</script>
<style lang="scss">
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

</style>