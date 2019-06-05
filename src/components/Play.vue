<template>
    <div class="Play">
        <div  class="play-box">
            <div @click="updatePlayD" class="music-img">
                <img :src="nowPlay.imgSrc" alt="">
            </div>
            <div @click="updatePlayD" class="music-title"><span>{{nowPlay.Name}}</span></div>
            <div class="player-box" @click="updatePause">
                <img v-if="nowPlay.isPause" src="../assets/play.png" alt="">
                <img v-if="!nowPlay.isPause" src="../assets/stop.png" alt="">
            </div>
        </div>
          <!-- 播放音乐详情 -->
    <transition name="playDe">
        <playDetails 
        v-show="PlayD"
        />
    </transition>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
import playDetails from '../components/playDetails'
export default {
   name:'Play',
   data() {
      return {
      }
   },
   computed:{
    ...mapState({
        nowPlay:state=>state.muscilist,
        PlayD:state=>state.globalState.isPlayD
    }),
   },
   methods:{
    ...mapMutations([
        'updatePause',
        'updatePlayD'
    ])
   },
   components:{
       playDetails
   }
}
</script>

<style lang="scss" scoped>
.Play{
    .play-box{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: -webkit-linear-gradient(top,#f9f9f9,#f3f3f3);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        z-index: 2;
        .music-img{
            width: 54.5px;
            height: 37.5px;
            padding-left: 15px;
            cursor: pointer;
            img{    
                width:100%;
                height: 100%;
                border-radius: 4px;
            }
        }
        .music-title{
            width: 71%;
            text-align: center;
            height: 50px;
            line-height: 50px;
            font-size:1rem;
        }
        .player-box{
            margin-top:7px;
            margin-right: 1rem;
        }
    }
}
</style>   