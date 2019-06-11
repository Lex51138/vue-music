<template>
    <div class="down-menu">
        <transition name='down'>
        <div v-if="isDown" class="menu">
            <div class="menu-title">{{nowItem.songname}}<br>
            <span>{{nowItem.singer[0].name}}</span>
            </div>
            <div class="menu-item">{{itemArr.name}}</div>
            <div class="menu-qx" @click="$emit('onDown')">取消</div>
        </div>
        </transition>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   props:['data','itemArr','isDown','nowItem'],
   activated() {
   }
}
</script>

<style lang='scss' scoped>
    .down-menu{
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: transparent;
        background: rgba(0,0,0,.6);
        .menu{
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 1000;
            width: 100%;
            background:#eee;
            .menu-qx{
                margin-top:7px;
            }
            div{
                background: #fff;
                padding: 10px 0;
                text-align: center;
                border-bottom: 1px solid #d9d9d9;
                font-size: 17px;
                span{
                    color: #666;
                    font-size: 12px;
                }
            }
        }
    }
    .down-enter-active, .down-leave-active {
        transition:  .3s;
    }
    .down-enter,.down-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translateY(100%);
    }
</style>