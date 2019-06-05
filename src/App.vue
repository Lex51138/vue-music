<template>
  <div id="App">
   <transition name='sort'>
     <router-view>
     </router-view>
   </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    };
  },
}

</script>
<style lang="scss">
   .sort-enter-active {
      transition: all 0.3s ease;
   }
   .sort-enter, .sort-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translateX(350px);
        opacity: 0;
      }
ul li{
  list-style: none;
}
body{
  background-color:#EDEDED!important;
}
</style>