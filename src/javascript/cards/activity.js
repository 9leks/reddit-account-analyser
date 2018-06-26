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

const link = post => {
  const { full_link, permalink, id, subreddit, link_id } = post
  const domain = 'https://reddit.com'

  if (full_link) return full_link
  if (permalink) return `${domain}${permalink}`

  const linkId = link_id.substring(3)
  return id
    ? `${domain}/r/${subreddit}/comments/${linkId}/_/${id}`
    : `${domain}/r/${subreddit}/comments/${linkId}/`
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
    const { score, created_utc, subreddit } = posts[index]
    const metadata = {
      score,
      created: timeFrom(created_utc),
      created_utc: created_utc * 1000,
      subreddit,
    }
    const href = link(posts[index])
    const content = `${parse(posts[index].body || posts[index].title)}`

    return {
      ...card,
      content,
      metadata,
      href,
    }
  })
}
