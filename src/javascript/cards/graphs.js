import {
  timeFromSignup,
  timeToCakeDay,
  signupDate,
} from '../javascript/date.js'

export default ({ name, created_utc, submissions, comments }) => [
  {
    title: 'CAKE DAY',
    icon: 'cake',
    content: `/u/${name} was created 
              <span :title="${new Date(created_utc * 1000)}">
              ${timeFromSignup(created_utc)} ago</span>, on<span class="orange">
              ${signupDate(created_utc)}</span>, meaning /u/${name}'s
              <span class="orange">cake day</span> is
              ${timeToCakeDay(created_utc)}`,
  },
  {
    title: 'KARMA',
    icon: 'upvote',
    content: `/u/${name} has a net worth of
              <span class="orange">${comments.karma} comment karma</span> 
              and <span class="orange">${submissions.karma}
              link karma</span> for a total of <span class="orange">
              ${comments.karma + submissions.karma} karma</span>.`,
  },
  {
    title: 'POSTS',
    icon: 'posts',
    content: `/u/${name} has posted <span class="orange">
              ${comments.count} comment${comments.count === 1 ? '' : 's'}
              </span> and <span class="orange">${submissions.count}
              ${submissions === 1 ? 'submission' : 'submissions'}</span>.`,
  },
  {
    title: 'GILDED',
    icon: 'gilded',
    content: ``,
  },
]
