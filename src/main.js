import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:username',
      component: App,
    },
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
