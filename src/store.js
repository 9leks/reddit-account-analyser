import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
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
    setInput: (state, input) => updateField(state, input),

    clearUser: (state) => (state.user = {}),

    setUserByAPICall: (state, payload) => {
      state.user = payload.metadata
    },
    
    setUserByLocalStorage: (state, payload) => {
      state.user = JSON.parse(localStorage.getItem(payload))
    },
  },
  
  actions: {
    setUserByAPICall: async ({ commit }, user) => {
      const metadata = await reddit.metadata(user)
      localStorage.setItem(user, JSON.stringify(metadata))
      commit('setUserByAPICall', { metadata })
    },

    setUserByLocalStorage: ({ commit }, payload) =>
      commit('setUserByLocalStorage', payload),

    clearUser: ({ commit }) => commit('clearUser'),
  },
})
