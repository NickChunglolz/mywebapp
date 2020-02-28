import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  preLoad:1.3
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
