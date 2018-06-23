import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'

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
