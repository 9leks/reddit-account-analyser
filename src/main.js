import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import store from './store'

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 750,
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
  store,
  render: h => h(App),
}).$mount('#app')
