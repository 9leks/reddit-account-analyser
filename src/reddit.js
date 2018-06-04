import { get } from 'axios'

async function metadata(user) {
  try {
    const [
      aboutData,
      commentsData,
      submissionsData,
      newCommentData,
      topCommentData,
      topSubmissionData,
    ] = await Promise.all([
      get(`https://www.reddit.com/user/${user}/about.json`),
      get(`https://api.pushshift.io/reddit/search/comment/?author=${user}&metadata=true&size=0`),
      get(`https://api.pushshift.io/reddit/search/submission/?author=${user}&metadata=true&size=0`),
      get(`https://api.pushshift.io/reddit/search/comment/?author=${user}&sort_type=created_utc&size=1`),
      get(`https://api.pushshift.io/reddit/search/comment/?author=${user}&sort_type=score&size=1`),
      get(`https://api.pushshift.io/reddit/search/submission/?author=${user}&sort_type=score&size=1`),
    ])

    const [
      about,
      comments,
      submissions,
      newComment,
      topComment,
      topSubmission,
    ] = [
      aboutData.data.data,
      commentsData.data.metadata,
      submissionsData.data.metadata,
      newCommentData.data.data[0],
      topCommentData.data.data[0],
      topSubmissionData.data.data[0],
    ]


    return {
      name: about.name,
      created: about.created,
      comments: comments.total_results,
      comment: {
        new: {
          header: 'NEWEST COMMENT',
          body: newComment.body,
          karma: newComment.score,
          created: newComment.created_utc,
          link: `https://reddit.com/r/${newComment.subreddit}/comments/${newComment.link_id.substring(3)}//${newComment.id}`
        },
        top: {
          header: 'TOP COMMENT',
          body: topComment.body,
          karma: topComment.score,
          created: topComment.created_utc,
          link: `https://reddit.com/r/${topComment.subreddit}/comments/${topComment.link_id.substring(3)}//${topComment.id}`
        },
      },
      submissions: submissions.total_results,
      submission: {
        top: {
          title: topSubmission.title,
          comments: topSubmission.num_comments,
          karma: topSubmission.score,
          created: topSubmission.created_utc,
          link: `https://reddit.com${topSubmission.permalink}`
        },
      },
      karma: {
        link: about.link_karma,
        comment: about.comment_karma,
      },
    }
  } catch (error) {
    throw error
  }
}

const numberOfCommentsPerSubreddit = async user => {
  const data = await get(`https://api.pushshift.io/reddit/search/comment/?author=${user}&size=1000`)
  const comments = data.data.data.map(comment => comment.subreddit)
  const map = new Map()
  
  comments.forEach(comment => map.set(comment, (map.get(comment) || 0) + 1))

  const arr = [...map].map(comment => {
    return {
      subreddit: comment[0],
      count: comment[1]
    }
  })

  return arr
}

export { metadata, numberOfCommentsPerSubreddit }
