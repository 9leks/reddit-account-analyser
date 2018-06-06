import Vue from 'vue'
import Vuex from 'vuex'
import { getAbout, getComment, getPostCount, getSubmission, getSubredditCount } from './reddit.js'

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
          new: { header: 'NEWEST COMMENT', ...newComment },
          top: { header: 'TOP COMMENT', ...topComment },
        },
      }
      const submissions = {
        karma: link_karma,
        count: submissionCount,
        posts: {
          top: { header: 'TOP SUBMISSION', ...topSubmission },
        },
      }

      const data = { name, created_utc, comments, submissions }
      commit('setUser', { data })
    },
  },
})
