import Vue from 'vue'
import Vuex from 'vuex'
import { getData } from './reddit.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      created_utc: 0,
      comments: {
        karma: 0,
        count: 0,
        posts: {
          new: {
            header: '',
            text: '',
            score: 0,
            score_hidden: false,
            created_utc: 0,
            link: '',
          },
          top: {
            header: '',
            text: '',
            score: 0,
            score_hidden: false,
            created_utc: 0,
            link: '',
          },
        },
      },
      submissions: {
        karma: 0,
        count: 0,
        posts: {
          top: {
            header: '',
            text: '',
            score: 0,
            score_hidden: false,
            created_utc: 0,
            link: '',
            comments: 0,
          },
        },
      },
    },
  },
  mutations: {
    setUser: (state, payload) => (state.user = payload.data),
  },

  actions: {
    setUser: async ({ commit }, username) => {
      const data = await getData(username)
      commit('setUser', { data })
    },
  },
})
