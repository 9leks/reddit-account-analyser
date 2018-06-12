import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import Toasted from 'vue-toasted'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(VueScrollTo, {
  container: 'body',
  easing: 'ease',
  cancelable: false,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})

Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
