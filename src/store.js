import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import Cookies from 'js-cookie'
import reddit from './reddit.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: '',
    user: {
      name: '',
      created: '',
      comments: 0,
      submissions: 0,
      karma: {
        link: 0,
        comment: 0,
      },
    },
  },

  getters: {
    getInput: state => getField(state),
  },

  mutations: {
    clearUser: state => (state.user = {}),
    setInput: (state, input) => updateField(state, input),
    setUserByAPICall: (state, payload) => (state.user = payload),
    setUserByCookies: (state, payload) => (state.user = payload),
  },

  actions: {
    setUserByAPICall: async ({ commit }, user) => {
      const metadata = await reddit.metadata(user)
      const expirationTime = new Date(new Date().getTime() + 30 * 1000)
      Cookies.set(user, metadata, { expires: expirationTime })
      commit('setUserByAPICall', metadata)
    },

    setUserByCookies: ({ commit }, payload) => {
      const user = Cookies.getJSON(payload)
      commit('setUserByCookies', user)
    },

    clearUser: ({ commit }) => commit('clearUser'),
  },
})
