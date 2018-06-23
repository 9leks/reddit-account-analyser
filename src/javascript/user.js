import {
  getAbout,
  getComment,
  getPostCount,
  getSubmission,
  getSubredditCount,
  getAmountOfCommentsOverTime,
} from './api.js'

export default async username => {
  const [
    about,
    commentCount,
    submissionCount,
    newComment,
    topComment,
    topSubmission,
    subredditCount,
    commentsOverTime,
  ] = await Promise.all([
    getAbout(username),
    getPostCount(username, 'comment'),
    getPostCount(username, 'submission'),
    getComment(username, 'new'),
    getComment(username, 'top'),
    getSubmission(username, 'top'),
    getSubredditCount(username, 'new', 50),
    getAmountOfCommentsOverTime(username, 50),
  ])

  const { name, created_utc, comment_karma, link_karma } = about
  const comments = {
    karma: comment_karma,
    count: commentCount,
    subredditCount,
    commentsOverTime,
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

  return { name, created_utc, comments, submissions }
}
