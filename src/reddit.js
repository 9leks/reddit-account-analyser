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
 * @param {Number} index Index of data array
 * @returns {Object} Returns true top submission, rather than a pinned submission.
 */
const skipPinnedSubmission = (data, index) => {
  if (!index) {
    if (data[0].data.pinned) return skipPinnedSubmission(data, 1)
    else return data[0].data
  } else {
    if (data[index].data.pinned) return skipPinnedSubmission(data, index + 1)
    else return data[index].data
  }
}

/**
 * @param {String} username The username of a Reddit user.
 * @param {String} sort The sorting type: "_new_", "_created_\__utc_", or "_top_".
 * @param {Number} limit Amount of comments.
 * @returns {Object} Returns title, amount of comments, score, UTC creation date and link to post. 
 */
export const getComments = async (username, sort, limit) => {
  const res = await get(`https://www.reddit.com/user/${username}/comments.json?sort=${sort}&limit=${limit}`)
  if (!res.data.data.children.length) return
  return res.data.data.children
}

/**
 * @param {String} username The username of a Reddit user.
 * @param {String} sort The sorting type: "_new_", "_created_\__utc_", or "_top_".
 * @returns {Object} Returns title, amount of comments, score, UTC creation date and link to post. 
 */
export const getComment = async (username, sort) => {
  const res = await getComments(username, sort, 1)
  if (!res.length) return

  const post = res[0].data
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
 * @returns {Array<Object>} Returns an array containing objects, each with subreddit name and count of the subreddit's occurences. 
 */
  export const getSubredditCount = async (username, sort, limit) => {
  try {
    const res = await getComments(username, sort, limit)
    return [...res
      .map(comment => comment.data.subreddit)
      .reduce((map, subreddit) => map.set(subreddit, (map.get(subreddit) || 0) + 1), new Map())]
      .map(subreddit => ({
        subreddit: subreddit[0],
        count: subreddit[1],
      }))
  } catch(error) {
    throw error
  }
}
