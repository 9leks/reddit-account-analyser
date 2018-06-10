import Vue from 'vue'
import Vuex from 'vuex'
import path from 'path'
import {
  getAbout,
  getComment,
  getPostCount,
  getSubmission,
  getSubredditCount,
} from './reddit.js'

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
          recent: [],
          new: {},
          top: {},
        },
      },
      submissions: {
        karma: 0,
        count: 0,
        posts: {
          top: {},
        },
      },
    },
  },
  mutations: {
    SET_USER: (state, payload) =>
      (state.user = { ...state.user, ...payload.data }),
  },

  actions: {
    setUser: async ({ commit }, username) => {
      const [
        about,
        commentCount,
        submissionCount,
        newComment,
        topComment,
        topSubmission,
        subredditCount,
      ] = await Promise.all([
        getAbout(username),
        getPostCount(username, 'comment'),
        getPostCount(username, 'submission'),
        getComment(username, 'new'),
        getComment(username, 'top'),
        getSubmission(username, 'top'),
        getSubredditCount(username, 'new', 50),
      ])

      const { name, created_utc, comment_karma, link_karma } = about
      const comments = {
        karma: comment_karma,
        count: commentCount,
        subredditCount,
        posts: {
          new: newComment,
          top: topComment,
        },
      }
      const submissions = {
        karma: link_karma,
        count: submissionCount,
        posts: {
          top: topSubmission,
        },
      }

      const data = { name, created_utc, comments, submissions }
      commit('SET_USER', { data })
    },
  },
})
