<template>
   <transition name='sort'>
    <div class="Sort" id="Sort">
       <div class="Sort-head">
          <router-link  to='/'>
          <div class="head-left">
             <img src="../../assets/return.png" alt="">
             排行榜
          </div>
          </router-link>
          <img class="head-cover" src="https://y.gtimg.cn/music/photo_new/T002R500x500M000002od0aF16hAeK.jpg" alt="">
          <div class="Sort-bottom">
            <div class="bottom-left">
               <p>
                  巅峰榜新歌
               </p>
               <p class="Play-total">
                  304万
               </p>
            </div>
            <!-- <div class="bottom-right">
                  <img src="../../assets/play.png" alt="">
            </div> -->
          </div>
       </div>
       <div class="Sort-list">
          <div class="Sort-item">
             <div class="number"></div>
             <div class="content">
                <p></p>
                <p></p>
             </div>
             <div><img src="" alt=""></div>
          </div>
       </div>
       <Play />
    </div>
    </transition>
</template>
<style lang='scss' scoped> 
   #Sort{
         position: fixed;
         top: 0;
         z-index: 1;
         height: 130%;
         width: 100%;
      .Sort-head{
          .head-left{
               color:white!important;
               position: fixed;
               width: 100%;
               height: 50px;
               line-height: 39px;
               padding: 10px;
               font-size: 1rem;
               img{
                  width: 20px;
                  position: relative;
                  top: 4px;
               }
            }
        .head-cover{
           width:100%;
        }
         .Sort-bottom{
            position: relative;
            top: -111px;
            .bottom-left{
               padding-left:15px;
               p{
                  color:white;
                  font-size:2rem;
               }
               .Play-total{
                  font-size:1rem;
                  margin-top:-37px;
               }
            }
            .bottom-right{
               img{

               }
            }
         }
      }
      .Sort-list{
         .Sort-item{
            .number{

            }
            .content{

            }
            img{

            }
         }

      }
   }

</style>

<script>
import Play from '../Play.vue';
export default {
   name:'Sort',
   data() {
      return {
      }
   },
   components:{
      Play
   },
   activated() {
   }
}
</script>

