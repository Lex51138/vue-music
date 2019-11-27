<style lang="scss">
    .sort-enter-active {
        transition: all 0.3s ease;
    }
    .sort-enter, .sort-leave-to /* .fade-leave-active below version 2.1.8 */ {
        /*transform: translateX(350px);*/
        opacity: 0;
    }
    ul li{
        list-style: none;
    }
    body{
        background-color:#EDEDED!important;
    }
    .foot{
        width:100%;
        height: 50px;
    }
</style>
<template>
    <div id="App">
        <transition name='sort'>
            <router-view>
            </router-view>
        </transition>
<!--        防止脱离文档流-->
        <div class="foot"></div>
        <audio ref='audio' autoplay="" :src="musicSrc"></audio>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'app',
        components: {
        },
        data () {
            return {
            };
        },
        computed:{
            ...mapState({
                musicSrc:state=>state.muscilist.musicSrc,
                isPause:state=>state.muscilist.isPause
            }),
        },
        watch:{
            isPause:function(){//监听isPause变化控制播放器播放暂停
                let audio = this.$refs.audio;
                this.isPause?audio.pause():audio.play();
            }
        }
    }

</script>