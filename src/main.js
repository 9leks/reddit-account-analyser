import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 400,
  easing: 'ease-in-out',
  offset: 0,
  cancelable: false,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
