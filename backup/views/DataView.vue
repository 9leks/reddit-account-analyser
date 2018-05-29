<template>
  <div class="grid">
    <div class="grid--row-3">
      <h6 class="header">
        <img src="@/assets/cake.svg"
             class="icon icon--cake"> CAKE DAY
      </h6>
      <p class="paragraph">
        This account was created {{ timeFromSignup }}, on
        <span class="orange">{{ signupDate }}</span>, meaning /u/{{ name }}'s
        <span class="orange">cake day</span> is in {{ timeToCakeDay }}.
      </p>

      <h6 class="header">
        <img src="@/assets/upvote.svg"
             class="icon"> UPVOTES
      </h6>
      <p class="paragraph">
        /u/{{ name }} has a net worth of
        <span class="orange">{{ karma.comment }}</span> comment karma and
        <span class="orange">{{ karma.link }}</span> link karma.
      </p>

      <h6 class="header">
        <img src="@/assets/posts.svg"
             class="icon icon--posts"> POSTS
      </h6>
      <p class="paragraph">
        A total of
        <span class="orange">{{ comments }}</span> {{ comments === 1 ? 'comment' : 'comments' }} and
        <span class="orange">{{ submissions }}</span> {{ submissions === 1 ? 'submission' : 'submissions' }} has been posted by this account.
      </p>
    </div>

  </div>

</template>

<script>
import { mapState } from 'vuex'
import { format, distanceInWordsToNow } from 'date-fns'

export default {
  name: 'DataView',
  computed: {
    ...mapState({
      name: state => state.user.name,
      created: state => state.user.created,
      karma: state => state.user.karma,
      comments: state => state.user.comments,
      submissions: state => state.user.submissions,
    }),
    signupDate() {
      const date = new Date(this.created * 1000)
      return format(date, 'MMM Do, YYYY')
    },
    timeFromSignup() {
      const date = new Date(this.created * 1000)
      return distanceInWordsToNow(date)
    },
    timeToCakeDay() {
      const date = new Date(this.created * 1000)
      const month = date.getMonth()
      const day = date.getDate()
      const year = new Date().getFullYear()
      return distanceInWordsToNow(new Date(year, month, day))
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  margin-right: 0.5rem;
}

.grid--row-3 {
  display: inherit;
  grid-template-rows: 100% 100% 100%;
}

.icon--cake {
  margin-bottom: -0.1rem;
}

.icon--upvote {
  margin-left: -1.2rem;
}

.icon--posts {
  margin-bottom: -0.4rem;
  margin-left: -2rem;
}

.header {
  margin-top: 2rem;
  margin-bottom: -1rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.paragraph {
  text-align: left;
  letter-spacing: 0.05px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3rem;
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #d7d7d7;
  color: rgb(40, 60, 60);
}
</style>
