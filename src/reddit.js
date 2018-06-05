import { get } from 'axios'

const getAbout = async username => {
  try {
    const res = await get(`https://www.reddit.com/user/${username}/about.json`)
    return res.data.data
  } catch (error) {
    throw error
  }
}

const getPostCount = async (username, type) => {
  try {
    const res = await get(`https://api.pushshift.io/reddit/search/${type}/?author=${username}&metadata=true&size=0`)
    return res.data.metadata.total_results || 0
  } catch (error) {
    throw error
  }
}

const getPost = async (username, type, sort, limit) => {
  const res = await get(`https://www.reddit.com/user/${username}/${type}.json?sort=${sort}&limit=${limit}`)
  if (!res.data.data.children.length) return; 
  const data = res.data.data.children[0].data
  const { score_hidden, score, created_utc, permalink } = data 

  const text = data.body || data.title
  const comments = data.num_comments || 0
  const link = `https://www.reddit.com${permalink}`

  return { text, score_hidden, score, created_utc, link, comments }
}

const getPosts = async (username, amount) => {
  try {
    const res = await get(`https://api.pushshift.io/reddit/search/comment/?author=${username}&sort_type=created_utc&size=${amount}`)
    return [...res.data.data
      .map(comment => comment.subreddit)
      .reduce((map, subreddit) => map.set(subreddit, (map.get(subreddit) || 0) + 1), new Map())]
      .map(subreddit => ({
        subreddit: subreddit[0],
        count: subreddit[1],
      }))
  } catch (error) {
    throw error
  }
}

const getData = async username => {
  const [about, 
         commentCount, 
         submissionCount, 
         newComment, 
         topComment, 
         topSubmission] = await Promise.all([
           getAbout(username),
           getPostCount(username, 'comment'),
           getPostCount(username, 'submission'),
           getPost(username, 'comments', 'new', 1),
           getPost(username, 'comments', 'top', 1),
           getPost(username, 'submitted', 'top', 1),
         ])

  const { name, created_utc } = about
  const comments = {
    karma: about.comment_karma,
    count: commentCount,
    posts: {
      new: { header: 'NEWEST COMMENT', ...newComment },
      top: { header: 'TOP COMMENT', ...topComment },
    }
  }
  const submissions = {
    karma: about.link_karma,
    count: submissionCount,
    posts: {
      top: { header: 'TOP/PINNED SUBMISSION', ...topSubmission },
    },
  }
  return { name, created_utc, comments, submissions }
}


export { getData, getPosts }
