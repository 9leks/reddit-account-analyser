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
            body: '',
            score: 0,
            score_hidden: false,
            created_utc: 0,
            link: '',
            id: 0,
          },
          top: {
            header: '',
            body: '',
            score: 0,
            score_hidden: false,
            created_utc: 0,
            link: '',
            id: 0,
          },
        },
      },
      submissions: {
        karma: 0,
        count: 0,
        posts: {
          top: {
            header: '',
            title: '',
            score: 0,
            score_hidden: false,
            created_utc: 0,
            link: '',
            num_comments: 0,
            id: 0,
            subreddit: '',
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
