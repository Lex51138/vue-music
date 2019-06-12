<template>
    <div class="music-item">
        <!-- <div class="item-left"> -->
            <span class="item-name" @click="playMusic(data)">{{data.songname}}</span>
            <span class="item-singer" @click="playMusic(data)">-{{data.singer[0].name}}</span>
        <!-- </div> -->
            <div class="item-right" @click="$emit('onDown')">
                <img src="../../assets/menu1.png">
            </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
import api from '../api/api'
export default {
   data() {
      return {
      }
   },
   props:['data'],
   methods:{
       ...mapMutations(['updateMuisc']),
       playMusic:function(data){
           const that = this;
           api.songUrl(data.songmid).then(result=>{
               let resultData={
               musicSrc:`http://ws.stream.qqmusic.qq.com/C400${data.songmid}.m4a?fromtag=0&guid=126548448&vkey=${result.data.data.items[0].vkey}`,
               Name:data.songname,
               songer:data.singer[0].name,
               imgSrc:`http://imgcache.qq.com/music/photo/album_300/${data.albumid%100}/300_albumpic_${data.albumid}_0.jpg`,
                }
                that.updateMuisc(resultData);
           })
       }
   }
}
</script>

<style lang='scss' scoped>
.music-item{
    display:flex;
    background:#fafafa;
    border-bottom: 1px solid #eee;
    padding-left: 10px;
    
    height: 40px;
    align-items: center;
    flex-direction: row; 
    // .item-left{
        .item-name{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }   
        .item-singer{
            color: #929292;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            flex-grow: 1;
        }
    // }
    .item-right{
        img{
            width:20px;
            margin-right:10px;
                margin-top: 10px;
        }
    }
}

</style>