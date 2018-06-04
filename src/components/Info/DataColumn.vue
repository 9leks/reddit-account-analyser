<template>
  <div class="container container--data">
    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon">
          <img src="@/static/img/cake.png">
        </div>
        <div class="card--header--title container">
          CAKE DAY
        </div>
      </div>
      <div class="card--content text">This account was created {{ timeFromSignup }} ago, on
        <span class="text--orange">{{ signupDate }}</span> , meaning /u/{{ name }}'s
        <span class="text--orange">cake day</span> is in {{ timeToCakeDay }}.
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon">
          <img src="@/static/img/upvote.png">
        </div>
        <div class="card--header--title">
          KARMA
        </div>
      </div>
      <div class="card--content text">/u/{{ name }} has a net worth of
        <span class="text--orange">{{ karma.comment }} comment karma</span> and
        <span class="text--orange">{{ karma.link }} link karma</span>.
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon">
          <img src="@/static/img/upload.png">
        </div>
        <div class="card--header--title">
          POSTS
        </div>
      </div>
      <div class="card--content text">This account has posted
        <span class="text--orange">{{ comments }}</span> {{ comments === 1 ? 'comment' : 'comments' }} and
        <span class="text--orange">{{ submissions }}</span> {{ submissions === 1 ? 'submission' : 'submissions' }}.
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {
  format,
  distanceInWordsToNow,
  differenceInCalendarDays,
  distanceInWords,
} from 'date-fns'

export default {
  name: 'DataColumn',
  computed: {
    ...mapState({
      name: state => state.user.name,
      created: state => state.user.created,
      karma: state => state.user.karma,
      comments: state => state.user.comments,
      submissions: state => state.user.submissions,
    }),
    signupDate() {
      const date = new Date(this.created * 1000 - 86400000)
      return format(date, 'MMM Do, YYYY')
    },
    timeFromSignup() {
      const date = new Date(this.created * 1000 - 86400000)
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      return distanceInWordsToNow(new Date(year, month, day))
    },
    timeToCakeDay() {
      const cakeDay = new Date(this.created * 1000 - 86400000)
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

<style lang="scss" scoped>
@import 'cards';

.container--data {
  height: 100%;

  grid-template-rows: repeat(3, 1fr);
}
</style>

