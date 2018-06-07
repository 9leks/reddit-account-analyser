import { get } from 'axios'

const getData = async url => {
  try {
    return await get(url)
  } catch (error) {
    throw error
  }
}

/**
 * @param   {String} username The username of a Reddit user.
 * @returns {Object} Returns formatted about.json data of user.
 */
export const getAbout = async username => {
  const res = await getData(
    `https://www.reddit.com/user/${username}/about.json`
  )
  return res.data.data
}

/**
 * @param   {String} username The username of a Reddit user.
 * @param   {String} type     The type of post: _comments_ or _submissions_
 * @returns {Number} Returns amount of comments or submissions made by user.
 */
export const getPostCount = async (username, type) => {
  const res = await getData(
    `https://api.pushshift.io/reddit/search/${type}` +
      `/?author=${username}&metadata=true&size=0`
  )
  return res.data.metadata.total_results
}

/**
 * @param   {String} username The username of a Reddit user.
 * @param   {String} sort     The sorting type: _new_, _new_, _controversial_,
 *                            or _top_.
 * @param   {String} type     Comment: _comments_, submission: _submitted_
 * @param   {Number} limit    Amount of posts.
 * @returns {Object} Returns submission, sorted by specified filter.
 */
export const getPost = async (username, sort, type, limit) => {
  const res = await getData(
    `https://www.reddit.com/user/${username}` +
      `/${type}.json?sort=${sort}&limit=${limit}`
  )
  const data = res.data.data.children
  return data ? data : []
}

/**
 * @param   {String} username The username of a Reddit user.
 * @param   {String} sort     The sorting type: _new_, _new_, _controversial_,
 *                            or _top_.
 * @param   {Number} limit    Amount of comments.
 * @returns {Object} Returns metadata of a comments based on sort filter.
 */
export const getComments = async (username, sort, limit) => {
  return await getPost(username, sort, 'comments', limit)
}

/**
 * @param   {String} username The username of a Reddit user.
 * @param   {String} sort     The sorting type: _new_, _new_, _controversial_,
 *                            or _top_.
 * @returns {Object} Returns metadata of a single comment based on sort filter.
 */
export const getComment = async (username, sort) => {
  const res = await getComments(username, sort, 1)
  if (!res.length) return
  const post = res[0].data
  return { ...post, link: `https://www.reddit.com${post.permalink}` }
}

/**
 * @param   {String} username The username of a Reddit user.
 * @param   {String} sort     The sorting type: _new_, _new_, _controversial_,
 *                            or _top_.
 * @returns {Object} Returns submission, sorted by specified filter.
 */
export const getSubmission = async (username, sort) => {
  const res = await getPost(username, sort, 'submitted', 5)
  if (!res.length) return
  const post = res.find(submission => submission.data.pinned !== true).data
  return { ...post, link: `https://www.reddit.com${post.permalink}` }
}

/**
 * @param   {String}        username The username of a Reddit user.
 * @param   {String}        sort     The sorting type: _new_, _new_,
 *                                   _controversial_, or _top_.
 * @param   {Number}        limit    The amount of posts to return, max 1000.
 * @returns {Array<Object>} Returns an array containing objects,
 *                          each with subreddit name and count of
 *                          the subreddit's occurences.
 */
export const getSubredditCount = async (username, sort, limit) => {
  const res = await getComments(username, sort, limit)
  return [
    ...res
      .map(comment => comment.data.subreddit)
      .reduce(
        (map, subreddit) => map.set(subreddit, (map.get(subreddit) || 0) + 1),
        new Map()
      ),
  ].map(subreddit => ({ subreddit: subreddit[0], count: subreddit[1] }))
}
