<template>
    <div class="Lb">
       <div class="Lb-box">
      <router-link :to="{name:'sort',params:{id:index}}" v-for="(item,index) in datalist" :key="index">
         <div class="Lb-item">
            <div class="item-left">
               <img :src="item.picUrl" alt="">
               <div class="left-hot">{{Math.round((item.listenCount /10000) * 100) / 100}}万</div>
            </div>
            <div class="item-right">
               <p class="right-title">{{item.topTitle}}</p>
                  <p v-for="(data,key) in item.songList" :key="key">
                     {{key+1}}&nbsp;{{data.songname}}
                     <span>-{{data.singername}}</span>
                  </p>
            </div>
         </div>
      </router-link>
       </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
import api from '../../api/api'
export default {
   name:'Leaderboard',
   data() {
      return {
      }
   },
   computed:{
       ...mapState({
         datalist : state=>state.muscilist.rankList,
      }),
   },
   methods:{
      ...mapMutations([
         'updateRank'
      ])
   },
   created() {
      let that = this;
      api.rank(that.updateRank);
   }
}
</script>

<style lang="scss" scoped>
.Lb{
   margin-top:20px;
   
   .Lb-box{
      width: 100%;
      .Lb-item{
         width:94%;
         margin:auto;
         border-radius: 3px;
         display:flex;
         height:100px;
         margin-top:10px;
         background-color: #fafafa;
         .item-left{
            img{
               width: 100px;
               height: 100px;
               border-bottom-left-radius: 5px;
               border-top-left-radius: 5px;
               z-index: 0;
            }
            .left-hot{
               position: relative;
               right: -4px;
               color: white;
               font-size: 10px;
               bottom: 24px;
               max-width: 87px;
               overflow: hidden;
            }
         }
         .item-right{
            margin-left: 15px;
            width:68%;
            color:black;
         .right-title{
               font-size: 16px;
               margin-top: 3px;
            }  
           p{
               overflow: hidden;
               white-space: nowrap;
               text-overflow: ellipsis;
               width: 98%;
               margin-top: -13px;
           }
           span{
               color: #8f8f8f;
           }
         }
      }
   }
}
</style>
