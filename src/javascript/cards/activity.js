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
      user: '',
      title: 'MOST RECENT COMMENT',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: true,
      type: 'comment',
    },
    {
      user: '',
      title: 'MOST RECENT SUBMISSION',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: true,
      type: 'submission',
    },
    {
      user: '',
      title: 'MOST UPVOTED COMMENT',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: true,
      type: 'comment',
    },
    {
      user: '',
      title: 'MOST UPVOTED SUBMISSION',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: true,
      type: 'submission',
    },
    {
      user: '',
      title: 'LEAST UPVOTED COMMENT',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: true,
      type: 'comment',
    },
    {
      user: '',
      title: 'LEAST UPVOTED SUBMISSION',
      icon: 'quotes',
      content: '',
      href: '',
      metadata: true,
      type: 'submission',
    },
  ]

  return cards.map((card, index) => {
    const { score, created_utc, subreddit, permalink } = posts[(user, index)]
    const content = `${parse(posts[index].body || posts[index].title)}`
    const href = `https://reddit.com${permalink}`

    if (!content)
      return {
        ...card,
        username: user.name,
        metadata: false,
      }

    return {
      ...card,
      username: user.name,
      score,
      created: timeFrom(created_utc),
      created_utc: created_utc * 1000,
      subreddit,
      content,
      href,
    }
  })
}
