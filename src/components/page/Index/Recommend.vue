<template>
    <div class="Rc">
       <div class="Rc-box">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in src" :key="index">
           <img :src="item.img" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
       </div>
      <div class="hot-music">
         <p class="hot-title">热门歌单</p>
         <div class="hot-music-box">
            <div class='music-item' v-for='(item,index) in hotlist' :key="index">
            <img :src="item.imgurl" alt="">
            <span>{{Math.round((item.listennum /10000) * 100) / 100}}万</span>
            <div class="title-box">
               <p class="title">{{item.dissname}}</p>
               <p class="username">{{item.creator.name}}</p>
            </div>
            </div>
         </div>
      </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {mapState,mapMutations} from 'vuex'
import api from '../../api/api'
export default {
   name:'Recommend',
   components:{
      swiper,
      swiperSlide
   },
   created() {
      let that = this;
      api.hot().then(result=>{
         that.updateHot(result.data.data.list);
      })
   },
   computed:{
      ...mapState({
         hotlist : state=>state.muscilist.hotlist,
      }),
   },
   methods:{ 
      ...mapMutations([
         'updateHot'
      ])
   },
   data() {
      return {
         src:[{img:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1297781.jpg'},{img:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1301134.jpg'},{img:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1289755.jpg'},
         {img:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1289755.jpg'},],
         hotmusic:[
            {
               img:'http://p.qpic.cn/music_cover/ibJJngZRP5m8ksRvDkGZxdVxDW7uhibciclqFBkibA8mgGZLiayv9eEs8Cw/300?n=1',
               playtotal:20.2,
               title:'华语民谣：藏在故事里的姑娘',
               username:'谈谈恋爱心'
            },
              {
               img:'http://p.qpic.cn/music_cover/ibJJngZRP5m8ksRvDkGZxdVxDW7uhibciclqFBkibA8mgGZLiayv9eEs8Cw/300?n=1',
               playtotal:20.2,
               title:'华语民谣：藏在故事里的姑娘',
               username:'谈谈恋爱心'
            },
              {
               img:'http://p.qpic.cn/music_cover/ibJJngZRP5m8ksRvDkGZxdVxDW7uhibciclqFBkibA8mgGZLiayv9eEs8Cw/300?n=1',
               playtotal:20.2,
               title:'华语民谣：藏在故事里的姑娘',
               username:'谈谈恋爱心'
            },
             {
               img:'http://p.qpic.cn/music_cover/ibJJngZRP5m8ksRvDkGZxdVxDW7uhibciclqFBkibA8mgGZLiayv9eEs8Cw/300?n=1',
               playtotal:20.2,
               title:'华语民谣：藏在故事里的姑娘',
               username:'谈谈恋爱心'
            },
             {
               img:'http://p.qpic.cn/music_cover/ibJJngZRP5m8ksRvDkGZxdVxDW7uhibciclqFBkibA8mgGZLiayv9eEs8Cw/300?n=1',
               playtotal:20.2,
               title:'华语民谣：藏在故事里的姑娘',
               username:'谈谈恋爱心'
            },
         ],
         swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
   },
   activated() {
   }
}
</script>

<style lang="scss" scoped>
.Rc{
   .swiper-container{
      height:170px;
      img{
         width:100%;
         height:100%;
      }
   }
   .hot-music{
      background-color: #fafafa;
      .hot-title{
         text-align: center;
         height: 50px;
         line-height: 50px;
         font-size: 16px;
      }
      .hot-music-box{
         width: 100%;
         display:flex;
         flex-wrap: wrap;
         margin-top: -15px;
         .music-item{
            width:50%;
            img{
               width: 100%;
               height: 172px;
            }
            span{
               position: relative;
               top: -29px;
               left: 6px;
               font-size: 13px;
               color: white;
            }
            .title-box{
               margin-top: -37px;
               text-indent: 6px;
               .title{
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  width: 98%;
               }
               .username{
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  width: 98%;
                  margin-top: -18px;
                  color: #8f8f8f;
               }
            }
         }
      }  
   }
}

</style>