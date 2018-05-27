<template>
  <div v-if="name">

    <CardItem>
      <template slot="header">
        <img src="@/assets/cake.svg"
             class="icon icon--cake"> CAKE DAY
      </template>
      <template slot="paragraph">
        This account was created {{ timeFromSignup }}, on
        <span class="orange">{{ signupDate }}</span>, meaning /u/{{ name }}'s
        <span class="orange">cake day</span> is in {{ timeToCakeDay }}.
      </template>
    </CardItem>

    <CardItem>
      <template slot="header">
        <img src="@/assets/upvote.svg"
             class="icon"> UPVOTES
      </template>
      <template slot="paragraph">
        /u/{{ name }} has a net worth of
        <span class="orange">{{ karma.comment }}</span> comment karma and
        <span class="orange">{{ karma.link }}</span> link karma.
      </template>
    </CardItem>

    <CardItem>
      <template slot="header">
        <img src="@/assets/posts.svg"
             class="icon icon--posts"> POSTS
      </template>
      <template slot="paragraph">
        A total of
        <span class="orange">{{ comments }}</span> {{ comments === 1 ? 'comment' : 'comments' }} and
        <span class="orange">{{ submissions }}</span> {{ submissions === 1 ? 'submission' : 'submissions' }} has been posted by this account.
      </template>
    </CardItem>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { format, distanceInWordsToNow } from 'date-fns'

import CardItem from '@/components/CardItem'

export default {
  name: 'DataView',
  components: { CardItem },
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
</style>
