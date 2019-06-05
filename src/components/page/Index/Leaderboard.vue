<template>
    <div class="Lb">
       <div class="Lb-box">
      <router-link to="/sort" v-for="(item,index) in items" :key="index">
         <div class="Lb-item">
            <div class="item-left">
               <img :src="item.img" alt="">
               <span class="left-hot">{{item.hot}}万</span>
            </div>
            <div class="item-right">
               <p class="right-title">{{item.title}}</p>
                  <p v-for="(data,key) in item.list" :key="key">
                     {{key}}&nbsp;{{data.name}}
                     <span>-{{data.singer}}</span>
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
         items:[
            {
             img:"http://y.gtimg.cn/music/photo_new/T003R300x300M000000nFYcR0XVO3G.jpg",
             hot:'1900',
             title:'说唱榜',
             list:[{name:'灰姑娘',singer:'陈雪凝'},{name:'灰姑娘',singer:'陈雪凝'},{name:'灰姑娘121312321',singer:'陈雪凝122323232'}]
            },
            {
             img:"http://y.gtimg.cn/music/photo_new/T003R300x300M000000LZidD4WD2Jf.jpg",
             hot:'1900',
             title:'说唱榜',
             list:[{name:'灰姑娘',singer:'陈雪凝'},{name:'灰姑娘',singer:'陈雪凝'}]
            },
            {
             img:"http://y.gtimg.cn/music/photo_new/T003R300x300M000000LZidD4WD2Jf.jpg",
             hot:'1900',
             title:'说唱榜',
             list:[{name:'灰姑娘',singer:'陈雪凝'},{name:'灰姑娘',singer:'陈雪凝'}]
            },
            {
             img:"http://y.gtimg.cn/music/photo_new/T003R300x300M000000LZidD4WD2Jf.jpg",
             hot:'1900',
             title:'说唱榜',
             list:[{name:'灰姑娘',singer:'陈雪凝'},{name:'灰姑娘',singer:'陈雪凝'}]
            },
            {
             img:"http://y.gtimg.cn/music/photo_new/T003R300x300M000000LZidD4WD2Jf.jpg",
             hot:'1900',
             title:'说唱榜',
             list:[{name:'灰姑娘',singer:'陈雪凝'},{name:'灰姑娘',singer:'陈雪凝'}]
            }
         ]
      }
   },
   methods:{
      ...mapState({
         datalist : state=>state.muscilist.rankList,
      }),
      ...mapMutations([
         'updateRank'
      ])
   },
   created() {
      let that = this;
      api.rank().then(result=>{
         that.updateRank(result);
      })
      
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
               right: 95px;
               color: white;
               font-size: 10px;
               bottom: 6px;
            }
         }
         .item-right{
            margin-left:-30px;
            width:68%;
            color:black;
            .right-title{
               font-size: 16px;
               margin-top: 6px;
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
