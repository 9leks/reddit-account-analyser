import { markdown } from 'snudown-js'
import sanitize from 'sanitize-html'

const parse = text => {
  return sanitize(
    markdown(text)
      .replace(/href="\/r/g, 'href="http://reddit.com/r')
      .replace(/href/g, 'target="_blank" href')
      .replace(/ u\//g, '/u/')
  )
}

export default user => {
  const posts = [
    user.comments.posts[0],
    user.submissions.posts[0],
    user.comments.posts[1],
    user.submissions.posts[1],
    user.comments.posts[2],
    user.submissions.posts[2],
  ]

  const cards = [
    {
      title: 'MOST RECENT COMMENT',
      icon: 'quotes',
      content: '',
    },
    {
      title: 'MOST RECENT SUBMISSION',
      icon: 'quotes',
      content: '',
    },
    {
      title: 'MOST UPVOTED COMMENT',
      icon: 'quotes',
      content: '',
    },
    {
      title: 'MOST UPVOTED SUBMISSION',
      icon: 'quotes',
      content: '',
    },
    {
      title: 'MOST DOWNVOTED COMMENT',
      icon: 'quotes',
      content: '',
    },
    {
      title: 'MOST DOWNVOTED SUBMISSION',
      icon: 'quotes',
      content: '',
    },
  ]

  return cards.map((card, index) => ({
    ...card,
    content: parse(posts[index].body || posts[index].title),
  }))
}
