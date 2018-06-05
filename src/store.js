import Vue from 'vue'
import Vuex from 'vuex'
import { set as setCookie, getJSON as getCookie } from 'js-cookie'
import { getData } from './reddit.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      created: 0,
      comments: {
        karma: 0,
        count: 0,
        posts: {
          new: {
            body: '',
            karma: 0,
            created: 0,
            link: '',
          },
          top: {
            body: '',
            karma: 0,
            created: 0,
            link: '',
          },
        },
      },
      submissions: {
        karma: 0,
        count: 0,
        posts: {
          top: {
            title: '',
            karma: 0,
            created: 0,
            link: '',
            comments: 0,
          },
        },
      },
    },
  },
  mutations: {
    setUserByAPICall: (state, payload) => (state.user = payload.data),
    setUserByCookie: (state, payload) => (state.user = payload.data),
  },

  actions: {
    setUserByAPICall: async ({ commit }, username) => {
      const data = await getData(username)
      const expirationTime = new Date(new Date().getTime() + 30 * 1000)
      setCookie(username, data, { expires: expirationTime })
      commit('setUserByAPICall', { data })
    },

    setUserByCookie: ({ commit }, payload) => {
      const data = getCookie(payload)
      commit('setUserByCookie', { data })
    },
  },
})
