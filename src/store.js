import Vue from 'vue'
import Vuex from 'vuex'
import { set, getJSON } from 'js-cookie'
import { metadata } from './reddit.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      created: '',
      comments: 0,
      comment: {
        new: {
          title: 'NEWEST COMMENT',
          body: '',
          karma: 0,
          created: 0,
        },
        top: {
          title: 'TOP COMMENT',
          body: '',
          karma: 0,
          created: 0,
        },
      },
      submissions: 0,
      submission: {
        top: {
          title: '',
          comments: 0,
          karma: 0,
          created: 0,
        },
      },
      karma: {
        link: 0,
        karma: 0,
      },
    },
  },
  mutations: {
    setUserByAPICall: (state, { data }) => (state.user = data),
    setUserByCookie: (state, { data }) => (state.user = data),
  },

  actions: {
    setUserByAPICall: async ({ commit }, user) => {
      const data = await metadata(user)
      const expirationTime = new Date(new Date().getTime() + 30 * 1000)
      set(user, data, { expires: expirationTime })
      commit('setUserByAPICall', { data })
    },

    setUserByCookie: ({ commit }, payload) => {
      const data = getJSON(payload)
      commit('setUserByCookie', { data })
    },
  },
})
