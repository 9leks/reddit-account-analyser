import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import reddit from './reddit.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: '',
    error: '',
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
    setInput: (state, input) => updateField(state, input),

    clearUser: (state, payload) => (state.user = payload),

    setUser: (state, payload) => {
      try {
        state.user = payload.metadata
        localStorage.setItem(state.user.name, JSON.stringify(state.user))
        state.error = ''
      } catch (error) {
        state.error = error
      }
    },

    setUserByLocalStorage: (state, payload) => {
      state.user = JSON.parse(localStorage.getItem(payload))
    },
  },

  actions: {
    setUser: async ({ commit }, user) => {
      const metadata = await reddit.metadata(user)
      const payload = { metadata }
      commit('setUser', payload)
    },

    setUserByLocalStorage: ({ commit }, payload) =>
      commit('setUserByLocalStorage', payload),

    clearUser: ({ commit }) => commit('clearUser', {}),
  },
})
