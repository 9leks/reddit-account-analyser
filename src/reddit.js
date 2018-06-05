import { get } from 'axios'

/**
 * @param {String} username The username of a Reddit user.
 * @returns {Object} Returns formatted about.json data of user.
 */
export const getAbout = async username => {
  try {
    const res = await get(`https://www.reddit.com/user/${username}/about.json`)
    return res.data.data
  } catch(error) {
    throw error
  }
}

/**
 * @param {String} username The username of a Reddit user.
 * @param {String} sort The sorting type: "_new_", "_created_utc_" or "_top_".
 * @returns {Object} Returns title, amount of comments, score, UTC creation date and link to post. 
 */
  export const getSubmission = async (username, sort) => {
  const res = await get(`https://www.reddit.com/user/${username}/submitted.json?sort=${sort}&limit=4`)
  if (!res.data.data.children.length) return

  const data = res.data.data.children
  const post = skipPinnedSubmission(data)
  const { title, num_comments, score, created_utc, permalink, subreddit, id } = post
  const link = `https://www.reddit.com${permalink}`
  return { title, num_comments, score, created_utc, subreddit, link, id }
}

/**
 * @param {Array<Object>} data Data containing comment metadata 
 * @returns {Object} Returns filtered top submission, rather than first pinned submission.
 */
const skipPinnedSubmission = data => {
  if (data[0].data.pinned) return skipPinnedSubmissionNext(data, 1)
  else return data[0].data
}

/**
 * @param {Array<Object>} data Data containing comment metadata 
 * @param {Number} index Index of data array
 * @returns {Object} Returns filtered top submission, rather than first pinned submission.
 */
const skipPinnedSubmissionNext = (data, index) => {
  if (data[index].data.pinned) return skipPinnedSubmissionNext(data, index + 1)
  else return data[index].data
}

/**
 * @param {String} username The username of a Reddit user.
 * @param {String} sort The sorting type: "_new_", "_created_utc_" or "_top_".
 * @returns {Object} Returns title, amount of comments, score, UTC creation date and link to post. 
 */
  export const getComment = async (username, sort) => {
  const res = await get(`https://www.reddit.com/user/${username}/comments.json?sort=${sort}&limit=1`)
  if (!res.data.data.children.length) return

  const post = res.data.data.children[0].data
  const { body, score_hidden, score, created_utc, permalink, subreddit, id } = post 
  const link = `https://www.reddit.com${permalink}`
  return { body, score_hidden, score, created_utc, link, subreddit, id }
}

/**
 * @param   {String} username The username of a Reddit user.
 * @param   {String} type The type of post: "_comments_" or "_submissions_"
 * @returns  Returns amount of comments or submissions made by user.
 */
export const getPostCount = async (username, type) => {
  try {
    const res = await get(`https://api.pushshift.io/reddit/search/${type}/?author=${username}&metadata=true&size=0`)
    return res.data.metadata.total_results
  } catch(error) {
    throw error
  }
}

/**
 * @param {String} username The username of a Reddit user.
 * @param {String} sort The sorting type: "_new_", "_created_utc_" or "_top_".
 * @param {Number} limit The amount of posts to return, max 1000.
 * @returns {Array<Object>} Returns an array containing Objects, each with subreddit name and count of their occurence. 
 */
  export const getSubredditCount = async (username, sort, limit) => {
  try {
    const res = await get(`https://www.reddit.com/user/${username}/comments.json?sort=${sort}&limit=${limit}`)
    return [...res.data.data.children
      .map(comment => comment.data.subreddit)
      .reduce((map, subreddit) => map.set(subreddit,(map.get(subreddit) || 0) + 1), new Map())]
      .map(subreddit => ({
        subreddit: subreddit[0],
        count: subreddit[1],
      }))
  } catch(error) {
    throw error
  }
}
