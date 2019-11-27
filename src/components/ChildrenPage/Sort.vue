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
          <img class="head-cover" :src="img[parseInt(this.$route.params.id)].picUrl" alt="">
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
          <div v-for="(item,index) in SortData" :key='index'>
             <Item v-bind:data='item.data'/>
          </div>
       </div>
       <Play />
    </div>
    </transition>
</template>
<style lang='scss' scoped> 
   #Sort{
        
      .Sort-head{
            height: 375px;
             position: fixed;
         top: 0;
         z-index: 1;
         // height: 130%;
         width: 100%;
          .head-left{
               color:white!important;
               position: fixed;
               width: 100%;
               height: 50px;
               line-height: 39px;
               padding: 10px;
               font-size: 16px;
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
                  font-size:22px;
               }
               .Play-total{
                  font-size:16px;
                  margin-top:-20px;
               }
            }
            .bottom-right{
               img{

               }
            }
         }
      }
      .Sort-list{
            position: relative;
            z-index: 3;
            margin-top: 100%;
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
import Play from '../Play'
import Item from '../multi/item'
import DownMenu from '../multi/DownMenu'
import {mapState,mapMutations} from 'vuex';
import api from '../api/api'
export default {
   name:'Sort',
   components:{
      Play,
      Item,
      DownMenu
   },
   data() {
      return {
         SortData:[],
      }
   },
   computed:{
      ...mapState({
         img:state=>state.muscilist.rankList
      }),
   },
   methods:{
      updateSort:(result,vue)=>{//这里接受post请求的回调里传过来的vue实例如果用this的话会指向到post请求的this
         vue.SortData=result;
      }
   },
   created(){
      api.rankD(this.$store.state.muscilist.rankList[parseInt(this.$route.params.id)].id,this.updateSort,this);//这里传一个当前的vue实例
   },
}
</script>

