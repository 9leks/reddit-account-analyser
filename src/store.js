import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import reddit from './reddit.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: '',
    name: '',
    created: '',
  },
  getters: {
    getInput: state => getField(state),
  },
  mutations: {
    setInput: (state, input) => updateField(state, input),
    setUser: (state, payload) => {
      try {
        state.name = payload.about.name
        state.created = payload.about.created
      } catch (error) {
        throw error
      }
    },
  },
  actions: {
    setUser: async ({ commit }, user) => {
      const about = await reddit.about(user)
      const payload = { about }
      commit('setUser', payload)
    },
  },
})
