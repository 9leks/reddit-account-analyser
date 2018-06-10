<template>
  <div class="container">
    <CardItem :header="'CAKE DAY'"
              :icon="cakeIcon">
      This account was created
      <span :title="new Date(created_utc * 1000)">{{ timeFromSignup }} ago</span>, on
      <span class="text--orange">{{ signupDate }}</span>, meaning /u/{{ name }}'s
      <span class="text--orange">cake day</span> is in {{ timeToCakeDay }}.
    </CardItem>

    <CardItem :header="'CAKE DAY'"
              :icon="upvoteIcon">
      /u/{{ name }} has a net worth of
      <span class="text--orange">{{ comments.karma }} comment karma</span> and
      <span class="text--orange">{{ submissions.karma }} link karma</span> for a total of
      <span class="text--orange">{{ comments.karma + submissions.karma }} karma</span>.
    </CardItem>

    <CardItem :header="'CAKE DAY'"
              :icon="cakeIcon">
      This account has posted
      <span class="text--orange">{{ comments.count }}</span> {{ comments === 1 ? 'comment' : 'comments' }} and
      <span class="text--orange">{{ submissions.count }}</span> {{ submissions === 1 ? 'submission' : 'submissions' }}.
    </CardItem>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import cakeIcon from '@/assets/img/cake.png'
import upvoteIcon from '@/assets/img/upvote.png'
import uploadIcon from '@/assets/img/upload.png'
import {
  format,
  distanceInWordsToNow,
  differenceInCalendarDays,
  distanceInWords,
} from 'date-fns'

import CardItem from '@/components/Utilities/CardItem'

export default {
  name: 'DataColumn',
  components: { CardItem },
  data() {
    return {
      cakeIcon,
      upvoteIcon,
      uploadIcon,
    }
  },
  computed: {
    ...mapState({
      name: state => state.user.name,
      created_utc: state => state.user.created_utc,
      comments: state => state.user.comments,
      submissions: state => state.user.submissions,
    }),
    signupDate() {
      const date = new Date(this.created_utc * 1000)
      return format(date, 'MMM Do, YYYY')
    },
    timeFromSignup() {
      const date = new Date(this.created_utc * 1000)
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      return distanceInWordsToNow(new Date(year, month, day))
    },
    timeToCakeDay() {
      const cakeDay = new Date(this.created_utc * 1000)
      const month = cakeDay.getMonth()
      const day = cakeDay.getDate()

      const currentDate = new Date()
      const currentDay = new Date(
        0,
        currentDate.getMonth(),
        currentDate.getDate()
      )

      return differenceInCalendarDays(new Date(0, month, day), currentDay) > 0
        ? distanceInWords(new Date(0, month, day), currentDay)
        : distanceInWords(new Date(1, month, day), currentDay)
    },
  },
}
</script>
