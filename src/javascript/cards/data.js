import { timeFrom, timeToCakeDay, signupDate } from '../date.js'

export default ({ name, created_utc, submissions, comments, is_gold }) => [
  {
    title: 'CAKE DAY',
    icon: '🎂',
    content: `/u/${name} was created 
              <span title="${new Date(created_utc * 1000)}">
              ${timeFrom(created_utc)} ago</span>, on<span class="orange">
              ${signupDate(created_utc)}</span>, meaning /u/${name}'s
              <span class="orange">cake day</span> is
              ${timeToCakeDay(created_utc)}`,
  },
  {
    title: 'KARMA',
    icon: '👍',
    content: `/u/${name} has a net worth of
              <span class="orange">${comments.karma} comment karma</span> 
              and <span class="orange">${submissions.karma}
              link karma</span> for a total of <span class="orange">
              ${comments.karma + submissions.karma} karma</span>.`,
  },
  {
    title: 'POSTS',
    icon: '✉️',
    content: `/u/${name} has posted <span class="orange">
              ${comments.count} comment${comments.count === 1 ? '' : 's'}
              </span> and <span class="orange">${submissions.count}
              ${submissions === 1 ? 'submission' : 'submissions'}</span> for a
              total of <span class="orange">${comments.count +
                submissions.count} post${
      comments.count + submissions.count === 1 ? '' : 's'
    }</span>.`,
  },
  {
    title: 'GILDED',
    icon: '🥇',
    content: is_gold
      ? `/u/${name} has <span class="orange">Reddit Gold</span>! Neat 🏆`
      : `/u/${name} does not have <span class="orange">Reddit Gold</span> 😔.`,
  },
]
