import {
  getAbout,
  getComment,
  getPostCount,
  getSubmission,
  getSubredditCount,
  getAmountOfCommentsOverTime,
  getWorstPost,
} from './api.js'

export default async username => {
  const [
    about,
    commentCount,
    submissionCount,
    newComment,
    topComment,
    worstComment,
    newSubmission,
    topSubmission,
    worstSubmission,
    subredditCount,
    commentsOverTime,
  ] = await Promise.all([
    getAbout(username),
    getPostCount(username, 'comment'),
    getPostCount(username, 'submission'),
    getComment(username, 'new'),
    getComment(username, 'top'),
    getWorstPost(username, 'submitted'),
    getSubmission(username, 'new'),
    getSubmission(username, 'top'),
    getWorstPost(username, 'comments'),
    getSubredditCount(username, 'new', 50),
    getAmountOfCommentsOverTime(username, 50),
  ])

  const { name, created_utc, comment_karma, link_karma } = about
  const comments = {
    karma: comment_karma,
    count: commentCount,
    subredditCount,
    commentsOverTime,
    posts: [newComment, topComment, worstComment],
  }
  const submissions = {
    karma: link_karma,
    count: submissionCount,
    posts: [newSubmission, topSubmission, worstSubmission],
  }

  return { name, created_utc, comments, submissions }
}
