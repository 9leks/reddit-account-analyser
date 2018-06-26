import { markdown } from 'snudown-js'
import { timeFrom } from '../date.js'
import sanitize from 'sanitize-html'

const parse = text => {
  return sanitize(
    markdown(text)
      .replace(/href="\/r/g, 'href="http://reddit.com/r')
      .replace(/href="\/u/g, 'href="http://reddit.com/u')
      .replace(/href/g, 'target="_blank" href')
      .replace(/<pre>/g, '<br>')
      .replace(/<\/pre>/g, '<br><br>')
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
      href: '',
      metadata: {},
      type: 'comment',
    },
    {
      title: 'MOST RECENT SUBMISSION',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: {},
      type: 'submission',
    },
    {
      title: 'MOST UPVOTED COMMENT',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: {},
      type: 'comment',
    },
    {
      title: 'MOST UPVOTED SUBMISSION',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: {},
      type: 'submission',
    },
    {
      title: 'LEAST UPVOTED COMMENT',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: {},
      type: 'comment',
    },
    {
      title: 'LEAST UPVOTED SUBMISSION',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: {},
      type: 'submission',
    },
  ]

  return cards.map((card, index) => {
    const { score, created_utc, subreddit, permalink } = posts[index]

    const metadata = {
      score,
      created: timeFrom(created_utc),
      created_utc: created_utc * 1000,
      subreddit,
    }

    const content = `${parse(posts[index].body || posts[index].title)}`
    const href = `https://reddit.com${permalink}`

    return {
      ...card,
      content,
      metadata,
      href,
    }
  })
}
