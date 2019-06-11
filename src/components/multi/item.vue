<template>
    <div class="music-item">
        <!-- <div class="item-left"> -->
            <span class="item-name">{{data.songname}}</span>
            <span class="item-singer">-{{data.singer[0].name}}</span>
        <!-- </div> -->
            <div class="item-right" @click="$emit('onDown')">
                <img src="../../assets/menu1.png">
            </div>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   props:['data'],
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