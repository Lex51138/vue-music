<template>
    <div class="PlayD-box">
        <div class="PlayD-header" @click="updatePlayD">
            <div class="PlayD-down">
                <img src="../assets/down.png" alt="">
            </div>
            <div class="PlayD-cover">
                <img src="https://y.gtimg.cn/music/photo_new/T002R500x500M000002od0aF16hAeK.jpg" alt="">
            </div>
        </div>
        <div class="playD-lyrics-box">
            <img class="lyrics-cover" src="https://y.gtimg.cn/music/photo_new/T002R500x500M000002od0aF16hAeK.jpg" alt="">
            <div class="PlayD-time-box">
                <div class="PlayD-time-bar">
                    <div class="playD-time-line"></div>
                </div>
                <div class="PlayD-time">
                    <span class="time-start">0:00</span>
                    <span class="time-end">4.53</span>
                </div>
            </div>
            <div class="lyrics-header">
                <p class="lyrics-name">{{nowPlay.Name}}</p>
                <p class="lyrics-songer">{{nowPlay.songer}}</p>
            </div>
            <div class="lyrics-content">
                <p>1232131</p>
                <p class="lyrics-main">12321312312321</p>
                <p>123213123</p>
            </div>
            <div class="lyrics-fotter">
                <div class="lyrics-left">
                    <img src="../assets/star.png" alt="">
                </div>
                <div class="lyrics-content">
                    <img src="../assets/on.png" alt="">
                    <img @click="$emit('onisPlay')" style="margin-left: 1rem;" v-if="!isPlay" src="../assets/play1.png" alt="">
                    <img @click="$emit('onisPlay')" style="margin-left: 1rem;" v-if="isPlay" src="../assets/stop1.png" alt="">
                    <img style="margin-left: 1rem;" src="../assets/next.png" alt="">
                </div>
                <div @click="onList" class="lyrics-right">
                    <img src="../assets/menu.png" alt="">
                </div>
            </div>
        </div>
        <transition name="playL">
        <playList 
            v-if="isList"
            v-on:onList="onList"
        />
        </transition>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
import playList from '../components/ChildrenPage/playList'
export default {
   data() {
      return {
          isList:false
      }
   },
   components:{
       playList
   },
   computed:{
       ...mapState({
           nowPlay:state=>state.muscilist
       })
   },
   props:['isPlay'],
   methods:{
       onList:function(){
           this.isList=!this.isList;
       },
       ...mapMutations([
        'updatePlayD'
    ])
   }
}
</script>

<style lang='scss' scoped>
.PlayD-box{
        position: fixed;
        top: -22px;
        // transform: translateY(80%);
        z-index: 996;
        height: 130%;
        width: 100%;
    .PlayD-header{
        .PlayD-down{
            position: relative;
            background-color: hsla(0,0%,100%,.8);
            width: 22px;
            height: 22px;
            border-radius: 100%;
            top: 3rem;
            left: 1rem;
            img{
                width: 12px;
                margin-left: 5px;
                height: 12px;
                margin-top: 6px;
            }
        }
        .PlayD-cover{
            img{
                width:100%;
            }
        }
    }
    .playD-lyrics-box{
            width: 100%;
            position: relative;
            display: flex;
            top: -5px;
            height: 45%;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.76);
        .lyrics-cover{
            position: absolute;
            width: 100%;
            z-index: -1;
            display: block;
            filter: blur(30px);
        }
        .PlayD-time-box{
            width:100%;
            .PlayD-time-bar{
                width:100%;
                height:4px;
                background: #ccc;
                .playD-time-line{
                    width:1%;
                    height:4px;
                    background-color:#ff4081;
                }
            }
        }
        .PlayD-time{
            .time-start{
                float:left;
            }
            .time-end{
                float:right;
            }
        }
            .lyrics-header{
                text-align: center;
                .lyrics-name{
                    font-weight: bold;
                    font-size:18px;
                    margin-top: -4px;
                }
                .lyrics-songer{
                    font-size: 12px;
                    color: #8f8f8f;
                    margin-top: -24px;
                }
            }
           
        }
     .lyrics-content{
         text-align: center;
        //  flex-grow: 21
         p{
            color: #4d4d4d;
            font-size:1rem;
         }
         .lyrics-main{
             color:black;
             font-size:1.2rem
         }
            }
     .lyrics-fotter{
                // display:flex;
                margin-top: 22px;
                align-items: center;
                .lyrics-left{
                    float:left;
                    margin-left: 1rem;
                    img{
                        
                    }
                }
                .lyrics-content{
                    float:left;
                    margin-left: 5.1rem;
                    img{

                    }
                }
                .lyrics-right{
                    float:right;
                    margin-right: 1rem;
                    img{

                    }
            }
    }
.playL-enter-active {
  transition: all 0.3s ease;
}

.playL-leave-active {
  transition: all 0.3s ease-out;
}
.playL-enter, .playL-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
//   opacity: 0;
}
}

</style>
