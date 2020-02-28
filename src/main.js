import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  preLoad:1.3,
  loading: 'loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
