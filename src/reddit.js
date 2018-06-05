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
    return res.data.metadata.total_results
  } catch (error) {
    throw error
  }
}

const getPost = async (username, post, sortType) => {
  try {
    const res = await get(`https://api.pushshift.io/reddit/search/${post}/?author=${username}&sort_type=${sortType}&size=1`)
    const data = res.data.data[0]

    const rest = {
      karma: data.score,
      created: data.created_utc,
    }

    return post === 'comment' ?
      { body: data.body, link: `https://reddit.com/comments/${data.link_id.substring(3)}//${data.parent_id.substring(3)}`, ...rest }
      : { title: data.title, link: `https://reddit.com/${data.id}`, comments: data.num_comments, ...rest }

  } catch (error) {
    throw error
  }
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
           getPost(username, 'comment', 'created_utc'),
           getPost(username, 'comment', 'score'),
           getPost(username, 'submission', 'score'),
         ])

  const { created } = about
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
      top: { header: 'TOP SUBMISSION', ...topSubmission },
    },
  }
  return { username, created, comments, submissions }
}


export { getData, getPosts }
