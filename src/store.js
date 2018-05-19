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
    setUser: (state, payload) => {
      try {
        state.user = payload.metadata
        state.error = ''
      } catch (error) {
        state.error = error
      }
    },
  },
  actions: {
    setUser: async ({ commit }, user) => {
      const metadata = await reddit.metadata(user)
      const payload = { metadata }
      commit('setUser', payload)
    },
  },
})
