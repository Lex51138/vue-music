<template>
    <div class="PlayList-box" id="PlayList-box">
        <div class="PlayList-head">
            <div class="head-left">
                <img v-if="model=='顺序播放'" src="../../assets/order.png" alt="">
                <img v-if="model=='单曲循环'" src="../../assets/one.png" alt="">
                <img v-if="model=='随机播放'" src="../../assets/random.png" alt="">
                <div class="left-model">{{model}}</div>
                <div class="left-total">{{muscilist.list.length}}首歌曲</div>
            </div>
            <div @click="$emit('onList')" class="head-right">完成</div>
        </div>
        <div class="PlayList-content">
            <div class="content-item">
                <div class="item-left">
                    <div class="item-music">{{muscilist.Music}}</div>
                    <span class="item-songer">-{{muscilist.songer}}</span>
                    <img src="" alt="">
                </div>
                <div class="item-right">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
   data() {
      return {
      }
   },
   computed:{
       ...mapState({
           muscilist : state=>state.muscilist,
           model:state=>{
               switch(state.muscilist.mode){
                   case 0:
                   return '顺序播放'
                   case 1:
                   return '单曲循环'
                   case 2:
                   return '随机播放'
               }
           }
       })
   },
   activated() {
   }
}
</script>

<style lang="scss" scoped>
/* pageFullScreen在index.css */
#PlayList-box {
        position: fixed;
        top: 0px;
        z-index: 997;
        height: 130%;
        width: 100%;
        background-color: #fafafa;
    .PlayList-head{
        height: 50px;
        font-size:16px;
        border-bottom: 1px solid #d0d0d0;
        line-height: 50px;
        position: fixed;
        width:100%;
        .head-left{
            float:left;
            display: flex;
            img{
                width: 24px;
                height: 24px;
                margin-left:0.7rem;
                margin-top: 14px;
            }
            .left-model{
                margin-left:0.3rem
            }
            .left-total{
                margin-left:16px
            }
        }
        .head-right{
            float:right;
            margin-right:0.7rem;
        }
    }
    .PlayList-content{
        .content-item{
            .item-left{
                .item-music{

                }
                .item-songer{

                }
            }
            .item-right{

            }
        }
    }
} 

</style>