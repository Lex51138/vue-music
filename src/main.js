import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import './jslib/controlSize'
import router from './router/index';
import 'muse-ui/dist/muse-ui.css';
import store from './vuex/store'

Vue.use(MuseUI);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
