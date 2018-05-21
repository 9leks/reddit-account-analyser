import axios from 'axios'

const metadata = async user => {
  const [ about, comments, submissions ] = await Promise.all([
    axios.get(`https://www.reddit.com/user/${user}/about.json`),
    axios.get(`https://api.pushshift.io/reddit/search/comment/?author=${user}&metadata=true&size=0`),
    axios.get(`https://api.pushshift.io/reddit/search/submission/?author=${user}&metadata=true&size=0`)
  ]).catch(error => error + 'hi')

  return {
    name: about.data.data.name,
    created: about.data.data.created,
    comments: comments.data.metadata.total_results,
    submissions: submissions.data.metadata.total_results,
    karma: {
      link: about.data.data.link_karma,
      comment: about.data.data.comment_karma,
    },
  }
}

export default { metadata }
