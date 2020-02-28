/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.nickchunglolz.com/portfolio/v1';
Vue.prototype.$axios = axios;

Vue.use(VueLazyload,{
  preLoad:1.3,
  loading: 'loading.gif',
  error: 'error.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
