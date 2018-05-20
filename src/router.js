import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:user',
      component: App,
    },
  ],
})
